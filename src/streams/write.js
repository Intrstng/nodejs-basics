import path, { dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';
import process from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToDestinationFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(pathToDestinationFile);
    try {
        await process.stdin.pipe(writeStream);
        // process.stdin.on('end', () => {
        //     console.log('Writing to file complete');
        // });
    } catch {
        throw new Error ('Write operation failed');
    }
};

await write();