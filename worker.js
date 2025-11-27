// Web Worker for multi-core benchmark testing
// This worker receives benchmark functions and runs them independently

// Helper functions (duplicated from benchmarks.js for worker context)
const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const generateRandomArray = (size) => {
    const arr = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 255);
    }
    return arr;
};

// Benchmark functions (same as benchmarks.js)
const runCompression = () => {
    const data = generateRandomString(10000);
    const dict = {};
    const dataArr = (data + "").split("");
    const out = [];
    let currChar;
    let phrase = dataArr[0];
    let code = 256;
    for (let i = 1; i < dataArr.length; i++) {
        currChar = dataArr[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        } else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase = currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    return data.length;
};

const runNavigation = () => {
    const size = 20;
    const grid = new Array(size * size).fill(0);
    for (let i = 0; i < 50; i++) grid[Math.floor(Math.random() * grid.length)] = 1;

    let ops = 0;
    const openSet = [0];
    const cameFrom = {};

    for (let i = 0; i < 500; i++) {
        ops++;
        if (openSet.length === 0) break;
        const current = openSet.pop();
        [1, -1, size, -size].forEach(offset => {
            const neighbor = current + offset;
            if (neighbor >= 0 && neighbor < grid.length && grid[neighbor] === 0) {
                openSet.push(neighbor);
            }
        });
    }
    return 1;
};

const runHTML5 = () => {
    // Simulate DOM operations with array manipulation
    const elements = [];
    for (let i = 0; i < 500; i++) {
        elements.push({ tag: 'p', content: "Test line " + i });
    }
    return 1;
};

const runPDF = () => {
    const width = 800;
    const height = 600;
    const operations = [];

    for (let i = 0; i < 100; i++) {
        operations.push({
            type: 'bezier',
            points: [Math.random() * width, Math.random() * height, Math.random() * width, Math.random() * height]
        });
    }
    return 0.48;
};

const runPhoto = () => {
    const size = 512;
    const data = new Uint8ClampedArray(size * size * 4);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 255;

    const factor = (259 * (128 + 255)) / (255 * (259 - 128));
    for (let i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128;
        data[i + 1] = factor * (data[i + 1] - 128) + 128;
        data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }
    return 1;
};

const runClang = () => {
    const code = `
        int main() {
            int a = 0;
            for(int i=0; i<100; i++) {
                a += i;
                printf("Hello %d", a);
            }
            return 0;
        }
    `.repeat(100);

    const tokens = code.match(/\b\w+\b|[{}();=]/g);
    return tokens.length / 1000;
};

const runText = () => {
    const text = generateRandomString(50000);
    const processed = text.replace(/a/g, 'b').replace(/1/g, '2');
    const parts = processed.split('b');
    const joined = parts.join('c');
    return 1;
};

const runAsset = () => {
    const obj = [];
    for (let i = 0; i < 1000; i++) {
        obj.push({ id: i, name: "Asset " + i, data: [Math.random(), Math.random()] });
    }
    const str = JSON.stringify(obj);
    const parsed = JSON.parse(str);
    return str.length / 1024 / 1024;
};

const runObjectDetection = () => {
    const size = 128;
    const input = new Float32Array(size * size);
    const output = new Float32Array(size * size);
    const kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1];

    for (let y = 1; y < size - 1; y++) {
        for (let x = 1; x < size - 1; x++) {
            let sum = 0;
            for (let ky = 0; ky < 3; ky++) {
                for (let kx = 0; kx < 3; kx++) {
                    sum += input[(y + ky - 1) * size + (x + kx - 1)] * kernel[ky * 3 + kx];
                }
            }
            output[y * size + x] = sum;
        }
    }
    return 1;
};

const runBlur = () => {
    const size = 256;
    const input = new Uint8Array(size * size);
    const output = new Uint8Array(size * size);

    for (let y = 2; y < size - 2; y++) {
        for (let x = 2; x < size - 2; x++) {
            let sum = 0;
            for (let ky = -2; ky <= 2; ky++) {
                for (let kx = -2; kx <= 2; kx++) {
                    sum += input[(y + ky) * size + (x + kx)];
                }
            }
            output[y * size + x] = sum / 25;
        }
    }
    return 1;
};

const runHorizon = () => {
    const size = 256;
    const input = new Uint8Array(size * size);
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i] * 2;
    }
    return (size * size) / 1000000;
};

const runRemover = () => {
    const size = 128;
    const data = new Uint8Array(size * size);
    for (let iter = 0; iter < 5; iter++) {
        for (let i = 1; i < data.length - 1; i++) {
            data[i] = (data[i - 1] + data[i + 1]) / 2;
        }
    }
    return 1;
};

// Map of available benchmark functions
const benchmarkFunctions = {
    compression: runCompression,
    navigation: runNavigation,
    html5: runHTML5,
    pdf: runPDF,
    photo: runPhoto,
    clang: runClang,
    text: runText,
    asset: runAsset,
    obj_detect: runObjectDetection,
    blur: runBlur,
    horizon: runHorizon,
    remover: runRemover
};

// Listen for messages from main thread
self.onmessage = function (e) {
    const { benchmarkId, iterations } = e.data;

    const fn = benchmarkFunctions[benchmarkId];
    if (!fn) {
        self.postMessage({ error: 'Unknown benchmark: ' + benchmarkId });
        return;
    }

    const startTime = performance.now();
    let operations = 0;

    // Run the benchmark
    for (let i = 0; i < iterations; i++) {
        operations += fn();
    }

    const endTime = performance.now();
    const durationSec = (endTime - startTime) / 1000;
    const rate = operations / durationSec;

    // Send result back to main thread
    self.postMessage({
        benchmarkId,
        rate,
        operations,
        duration: durationSec
    });
};
