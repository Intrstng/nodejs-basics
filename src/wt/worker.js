import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    // // Uncomment for testing
    // if (Math.random() > 0.5) {
    //     throw new Error('Some Error')
    // }
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();