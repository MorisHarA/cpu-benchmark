// Benchmark implementations

// Helper to generate random data
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

// 1. File Compression (LZW Simulation)
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
    return data.length; // bytes processed
};

// 2. Navigation (A* Pathfinding Simulation)
const runNavigation = () => {
    // Simplified pathfinding on a small grid
    const size = 20;
    const grid = new Array(size * size).fill(0);
    // Add some obstacles
    for (let i = 0; i < 50; i++) grid[Math.floor(Math.random() * grid.length)] = 1;

    // Find path from 0,0 to 19,19
    // Just simulate the cost of node expansion
    let ops = 0;
    const openSet = [0];
    const cameFrom = {};

    // Fake A* loop
    for (let i = 0; i < 500; i++) {
        ops++;
        if (openSet.length === 0) break;
        const current = openSet.pop();
        // Expand neighbors
        [1, -1, size, -size].forEach(offset => {
            const neighbor = current + offset;
            if (neighbor >= 0 && neighbor < grid.length && grid[neighbor] === 0) {
                openSet.push(neighbor);
            }
        });
    }
    return 1; // 1 route calculated
};

// 3. HTML5 Browser (DOM Manipulation)
// We can't easily measure "pages/sec" without actually rendering, 
// so we simulate the DOM tree construction cost in memory.
const runHTML5 = () => {
    const div = document.createElement('div');
    for (let i = 0; i < 500; i++) {
        const p = document.createElement('p');
        p.textContent = "Test line " + i;
        div.appendChild(p);
    }
    // Force layout calc
    return 1; // 1 "page"
};

// 4. PDF Renderer (Canvas Drawing)
const runPDF = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 800, 600);

    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 800, Math.random() * 600);
        ctx.bezierCurveTo(
            Math.random() * 800, Math.random() * 600,
            Math.random() * 800, Math.random() * 600,
            Math.random() * 800, Math.random() * 600
        );
        ctx.stroke();
        ctx.fillText("PDF Test", Math.random() * 800, Math.random() * 600);
    }
    return 0.48; // approx Mpixels rendered (800*600 = 0.48MP)
};

// 5. Photo Library (Image Processing)
const runPhoto = () => {
    const size = 512;
    const data = new Uint8ClampedArray(size * size * 4);
    // Fill
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 255;

    // Apply contrast
    const factor = (259 * (128 + 255)) / (255 * (259 - 128));
    for (let i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128;
        data[i + 1] = factor * (data[i + 1] - 128) + 128;
        data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }
    return 1; // 1 image
};

// 6. Clang (Code Parsing Simulation)
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

    // Tokenize
    const tokens = code.match(/\b\w+\b|[{}();=]/g);
    return tokens.length / 1000; // Klines (approx)
};

// 7. Text Processing
const runText = () => {
    const text = generateRandomString(50000);
    // Search and replace
    const processed = text.replace(/a/g, 'b').replace(/1/g, '2');
    // Split join
    const parts = processed.split('b');
    const joined = parts.join('c');
    return 1; // 1 "page" of text
};

// 8. Asset Compression (JSON Serialization)
const runAsset = () => {
    const obj = [];
    for (let i = 0; i < 1000; i++) {
        obj.push({ id: i, name: "Asset " + i, data: [Math.random(), Math.random()] });
    }
    const str = JSON.stringify(obj);
    const parsed = JSON.parse(str);
    return str.length / 1024 / 1024; // MB
};

// 9. Object Detection (Matrix Convolution)
const runObjectDetection = () => {
    const size = 128;
    const input = new Float32Array(size * size);
    const output = new Float32Array(size * size);
    const kernel = [
        -1, -1, -1,
        -1, 8, -1,
        -1, -1, -1
    ];

    // Simple convolution
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
    return 1; // 1 image
};

// 10. Background Blur (Box Blur)
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
    return 1; // 1 image
};

// 11. Horizon Detection (Sobel)
const runHorizon = () => {
    const size = 256;
    const input = new Uint8Array(size * size);
    // X gradient
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i] * 2; // Fake math
    }
    return (size * size) / 1000000; // Mpixels
};

// 12. Object Remover (Inpainting simulation)
const runRemover = () => {
    const size = 128;
    const data = new Uint8Array(size * size);
    // Iterative fill
    for (let iter = 0; iter < 5; iter++) {
        for (let i = 1; i < data.length - 1; i++) {
            data[i] = (data[i - 1] + data[i + 1]) / 2;
        }
    }
    return 1; // 1 image
};


// Benchmark configurations with base rates for score calculation
// baseRate: reference rate that yields baseScore (typically 3500)
// The score is calculated as: (actualRate / baseRate) * baseScore
export const benchmarks = [
    { id: 'compression', name: 'File Compression', unit: 'MB/sec', fn: runCompression, baseRate: 480.9, baseScore: 3349 },
    { id: 'navigation', name: 'Navigation', unit: 'routes/sec', fn: runNavigation, baseRate: 20.4, baseScore: 3393 },
    { id: 'html5', name: 'HTML5 Browser', unit: 'pages/sec', fn: runHTML5, baseRate: 77.9, baseScore: 3803 },
    { id: 'pdf', name: 'PDF Renderer', unit: 'Mpixels/sec', fn: runPDF, baseRate: 79.6, baseScore: 3453 },
    { id: 'photo', name: 'Photo Library', unit: 'images/sec', fn: runPhoto, baseRate: 45.8, baseScore: 3377 },
    { id: 'clang', name: 'Clang', unit: 'Klines/sec', fn: runClang, baseRate: 21.7, baseScore: 4411 },
    { id: 'text', name: 'Text Processing', unit: 'pages/sec', fn: runText, baseRate: 265.8, baseScore: 3320 },
    { id: 'asset', name: 'Asset Compression', unit: 'MB/sec', fn: runAsset, baseRate: 93.8, baseScore: 3028 },
    { id: 'obj_detect', name: 'Object Detection', unit: 'images/sec', fn: runObjectDetection, baseRate: 167.6, baseScore: 5602 },
    { id: 'blur', name: 'Background Blur', unit: 'images/sec', fn: runBlur, baseRate: 14.7, baseScore: 3556 },
    { id: 'horizon', name: 'Horizon Detection', unit: 'Mpixels/sec', fn: runHorizon, baseRate: 114.8, baseScore: 3689 },
    { id: 'remover', name: 'Object Remover', unit: 'Mpixels/sec', fn: runRemover, baseRate: 339.1, baseScore: 4410 },
];
