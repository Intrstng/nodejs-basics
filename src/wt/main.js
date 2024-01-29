import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Worker } from 'worker_threads';
import os from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToWorkerScript = path.join(__dirname, 'worker.js');

const START_NUMBER = 10;

const createWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorkerScript, { workerData });

        worker.on('message', (data) => resolve({
            status: 'resolved',
            data
        }));
        worker.on('error', () => resolve({
            status: 'error',
            data: null
        }));
    });
};

const performCalculations = async () => {
    const numWorkers = os.cpus().length;
    const results = [];

    for (let i = 0; i < numWorkers; i++) {
        const workerData = START_NUMBER + i;
        const result = await createWorker(workerData);
        results.push(result);
    }
    console.log(results);
};

await performCalculations();