import { benchmarks } from './benchmarks.js';

// DOM elements
const totalScoreEl = document.getElementById('totalScore');
const scoreLabelEl = document.getElementById('scoreLabel');
const statusTextEl = document.getElementById('statusText');
const startBtn = document.getElementById('startBtn');
const benchmarkListEl = document.getElementById('benchmarkList');
const deviceInfoEl = document.getElementById('deviceInfo');
const progressCircle = document.querySelector('.progress-ring__circle');
const singleScoreEl = document.getElementById('singleScore');
const multiScoreEl = document.getElementById('multiScore');
const modeTabs = document.querySelectorAll('.mode-tab');

// State
let isRunning = false;
let currentMode = 'single'; // 'single' or 'multi'
let singleCoreScore = null;
let multiCoreScore = null;
let totalScore = 0;
const results = {};
const numCores = navigator.hardwareConcurrency || 4;

// Device detection
function detectDevice() {
    const ua = navigator.userAgent;
    let device = 'Unknown Device';

    if (/iPhone/.test(ua)) {
        device = 'iPhone';
    } else if (/iPad/.test(ua)) {
        device = 'iPad';
    } else if (/Android/.test(ua)) {
        device = 'Android Device';
    } else if (/Mac/.test(ua)) {
        device = 'Mac';
    } else {
        device = 'Desktop';
    }

    const cores = navigator.hardwareConcurrency || 'Unknown';
    deviceInfoEl.textContent = `${device} • ${cores} cores`;
}

// Initialize benchmark list
function initBenchmarkList() {
    benchmarkListEl.innerHTML = '';

    benchmarks.forEach(benchmark => {
        const item = document.createElement('div');
        item.className = 'benchmark-item';
        item.id = `bench-${benchmark.id}`;
        item.innerHTML = `
            <div class="item-info">
                <div class="item-name">${benchmark.name}</div>
                <div class="item-metric">${benchmark.unit}</div>
            </div>
            <div class="item-score">
                <span class="score-value">-</span>
                <div class="spinner"></div>
            </div>
        `;
        benchmarkListEl.appendChild(item);
    });
}

// Update progress ring
function updateProgressRing(percentage) {
    const circumference = 565.48;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

// Animate score
function animateScore(fromScore, toScore, duration = 500) {
    const startTime = performance.now();
    const diff = toScore - fromScore;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const currentScore = Math.floor(fromScore + diff * easeProgress);

        totalScoreEl.textContent = currentScore.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Run single benchmark - runs 5 times and takes average
async function runBenchmark(benchmark, iterations = 300) {
    return new Promise((resolve) => {
        const itemEl = document.getElementById(`bench-${benchmark.id}`);
        const scoreEl = itemEl.querySelector('.score-value');

        // Mark as active
        itemEl.classList.add('active');
        statusTextEl.textContent = `Running ${benchmark.name}...`;

        // Allow UI to update
        setTimeout(async () => {
            const numRuns = 5;
            const rates = [];
            const scores = [];

            // Run the benchmark 5 times
            for (let run = 0; run < numRuns; run++) {
                statusTextEl.textContent = `Running ${benchmark.name}...`;
                
                const startTime = performance.now();
                let operations = 0;

                // Run the benchmark multiple times
                for (let i = 0; i < iterations; i++) {
                    operations += benchmark.fn();
                }

                const endTime = performance.now();
                const durationSec = (endTime - startTime) / 1000;
                const rate = operations / durationSec;
                rates.push(rate);

                // Calculate score based on base rate and base score
                const rawScore = (rate / benchmark.baseRate) * benchmark.baseScore;
                const score = Math.floor(rawScore / 2000);
                scores.push(score);

                // Small delay between runs
                if (run < numRuns - 1) {
                    await new Promise(r => setTimeout(r, 100));
                }
            }

            // Calculate average
            const avgRate = rates.reduce((a, b) => a + b, 0) / numRuns;
            const avgScore = Math.floor(scores.reduce((a, b) => a + b, 0) / numRuns);

            // Update UI - show both rate and score
            itemEl.classList.remove('active');
            itemEl.classList.add('done');

            // Display rate value
            scoreEl.textContent = avgRate.toFixed(1);

            // Add score display below the rate
            const scoreDisplay = document.createElement('div');
            scoreDisplay.className = 'item-score-points';
            scoreDisplay.textContent = avgScore.toLocaleString();
            scoreEl.parentElement.appendChild(scoreDisplay);

            results[benchmark.id] = avgScore;

            resolve(avgScore);
        }, 50);
    });
}

// Run all benchmarks
async function runAllBenchmarks() {
    if (isRunning) return;

    isRunning = true;
    startBtn.disabled = true;
    totalScore = 0;

    // Reset all items
    document.querySelectorAll('.benchmark-item').forEach(item => {
        item.classList.remove('active', 'done');
        item.querySelector('.score-value').textContent = '-';
        // Remove previous score display if exists
        const scorePoints = item.querySelector('.item-score-points');
        if (scorePoints) scorePoints.remove();
    });

    totalScoreEl.textContent = '0';
    updateProgressRing(0);

    const totalBenchmarks = benchmarks.length;
    let completedBenchmarks = 0;
    let totalScoreSum = 0;

    // Run each benchmark sequentially
    for (const benchmark of benchmarks) {
        const score = await runBenchmark(benchmark);
        completedBenchmarks++;

        // Update total score sum and calculate average
        totalScoreSum += score;
        const previousAverage = totalScore;
        totalScore = Math.round(totalScoreSum / completedBenchmarks);
        animateScore(previousAverage, totalScore, 300);

        // Update progress
        const progress = (completedBenchmarks / totalBenchmarks) * 100;
        updateProgressRing(progress);

        // Small delay between benchmarks
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Complete
    statusTextEl.textContent = 'Complete!';
    startBtn.disabled = false;
    isRunning = false;

    // Save score based on current mode
    if (currentMode === 'single') {
        singleCoreScore = totalScore;
        singleScoreEl.textContent = totalScore.toLocaleString();
    } else {
        multiCoreScore = totalScore;
        multiScoreEl.textContent = totalScore.toLocaleString();
    }

    // Add celebratory animation
    totalScoreEl.style.animation = 'none';
    setTimeout(() => {
        totalScoreEl.style.animation = 'pulse 1s ease-in-out';
    }, 10);
}

// Run multi-core benchmark using Web Workers - runs 5 times and takes average
async function runMultiCoreBenchmark(benchmark, iterations = 300) {
    const itemEl = document.getElementById(`bench-${benchmark.id}`);
    const scoreEl = itemEl.querySelector('.score-value');

    itemEl.classList.add('active');

    const numRuns = 5;
    const rates = [];
    const scores = [];

    // Run the benchmark 5 times
    for (let run = 0; run < numRuns; run++) {
        statusTextEl.textContent = `Running ${benchmark.name} (${numCores} cores)...`;

        const rate = await new Promise((resolve) => {
            setTimeout(() => {
                const workers = [];
                const results = [];
                const iterationsPerCore = Math.floor(iterations / numCores);
                let completedWorkers = 0;

                // Create workers for each core
                for (let i = 0; i < numCores; i++) {
                    const worker = new Worker('worker.js');
                    workers.push(worker);

                    worker.onmessage = function (e) {
                        if (e.data.error) {
                            console.error(e.data.error);
                            return;
                        }

                        results.push(e.data);
                        completedWorkers++;

                        // When all workers complete
                        if (completedWorkers === numCores) {
                            // Calculate total rate across all cores
                            const totalOperations = results.reduce((sum, r) => sum + r.operations, 0);
                            const totalDuration = Math.max(...results.map(r => r.duration));
                            const rate = totalOperations / totalDuration;

                            // Cleanup workers
                            workers.forEach(w => w.terminate());

                            resolve(rate);
                        }
                    };

                    worker.onerror = function (error) {
                        console.error('Worker error:', error);
                        worker.terminate();
                    };

                    // Send work to worker
                    worker.postMessage({
                        benchmarkId: benchmark.id,
                        iterations: iterationsPerCore
                    });
                }
            }, 50);
        });

        rates.push(rate);

        // Calculate score for this run
        const rawScore = (rate / benchmark.baseRate) * benchmark.baseScore;
        const score = Math.floor(rawScore / 2000);
        scores.push(score);

        // Small delay between runs
        if (run < numRuns - 1) {
            await new Promise(r => setTimeout(r, 100));
        }
    }

    // Calculate average
    const avgRate = rates.reduce((a, b) => a + b, 0) / numRuns;
    const avgScore = Math.floor(scores.reduce((a, b) => a + b, 0) / numRuns);

    // Update UI
    itemEl.classList.remove('active');
    itemEl.classList.add('done');
    scoreEl.textContent = avgRate.toFixed(1);

    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = 'item-score-points';
    scoreDisplay.textContent = avgScore.toLocaleString();
    scoreEl.parentElement.appendChild(scoreDisplay);

    return avgScore;
}

// Run all benchmarks with current mode (single or multi)
async function runAllBenchmarksWithMode() {
    if (isRunning) return;

    isRunning = true;
    startBtn.disabled = true;
    totalScore = 0;

    // Update label
    scoreLabelEl.textContent = currentMode === 'single' ? 'Single-Core Score' : `Multi-Core Score (${numCores} cores)`;

    // Reset all items
    document.querySelectorAll('.benchmark-item').forEach(item => {
        item.classList.remove('active', 'done');
        item.querySelector('.score-value').textContent = '-';
        const scorePoints = item.querySelector('.item-score-points');
        if (scorePoints) scorePoints.remove();
    });

    totalScoreEl.textContent = '0';
    updateProgressRing(0);

    const totalBenchmarks = benchmarks.length;
    let completedBenchmarks = 0;
    let totalScoreSum = 0;

    // Run each benchmark sequentially
    for (const benchmark of benchmarks) {
        const score = currentMode === 'single'
            ? await runBenchmark(benchmark)
            : await runMultiCoreBenchmark(benchmark);
        completedBenchmarks++;

        // Accumulate score but don't display yet
        totalScoreSum += score;

        // Update progress
        const progress = (completedBenchmarks / totalBenchmarks) * 100;
        updateProgressRing(progress);

        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Calculate final average score
    totalScore = Math.round(totalScoreSum / completedBenchmarks);

    // Complete - now animate and show the total score
    statusTextEl.textContent = 'Complete!';
    animateScore(0, totalScore, 800);

    startBtn.disabled = false;
    isRunning = false;

    // Save score based on current mode
    if (currentMode === 'single') {
        singleCoreScore = totalScore;
        singleScoreEl.textContent = totalScore.toLocaleString();
    } else {
        multiCoreScore = totalScore;
        multiScoreEl.textContent = totalScore.toLocaleString();
    }

    // Add celebratory animation
    totalScoreEl.style.animation = 'none';
    setTimeout(() => {
        totalScoreEl.style.animation = 'pulse 1s ease-in-out';
    }, 10);
}

// Mode tab switching
modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (isRunning) return; // Don't switch during test

        const mode = tab.dataset.mode;
        currentMode = mode;

        // Update active tab
        modeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update display
        scoreLabelEl.textContent = mode === 'single' ? 'Single-Core Score' : `Multi-Core Score (${numCores} cores)`;

        // Show saved score if available
        if (mode === 'single' && singleCoreScore !== null) {
            totalScoreEl.textContent = singleCoreScore.toLocaleString();
        } else if (mode === 'multi' && multiCoreScore !== null) {
            totalScoreEl.textContent = multiCoreScore.toLocaleString();
        } else {
            totalScoreEl.textContent = '0';
        }
        statusTextEl.textContent = 'Ready';
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Event listeners
startBtn.addEventListener('click', runAllBenchmarksWithMode);

// Initialize on load
detectDevice();
initBenchmarkList();
updateProgressRing(0);
