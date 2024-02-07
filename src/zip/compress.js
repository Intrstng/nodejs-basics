import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToSourceFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToDestinationFile = path.join(__dirname, 'files', 'archive.gz');

const sourceStream = createReadStream(pathToSourceFile);
const gzipStream = createGzip();
const destinationStream = createWriteStream(pathToDestinationFile);

const compress = async () => {
    try {
        await pipeline(sourceStream, gzipStream, destinationStream);
        console.log('File compressed successfully!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await compress();