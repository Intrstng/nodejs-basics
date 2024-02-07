import path, { dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import process from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToSourceFile = path.join(__dirname, 'files', 'fileToRead.txt');
const sourceFileName = basename(pathToSourceFile);

const read = async () => {
    const readStream = createReadStream(pathToSourceFile);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    readStream.on('error',(e) => {
        console.log(`File ${sourceFileName} read operation failed`);
        console.log(e);
    });
};

await read();




// const read = async () => {
//     const readStream = createReadStream(pathToSourceFile);
//     readStream.pipe(process.stdout);
//     readStream.on('error', (error) => {
//         console.error(`File ${sourceFileName} read operation failed. Error: ${error}`);
//     });
// };