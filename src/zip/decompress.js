import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToSourceFile = path.join(__dirname, 'files', 'archive.gz');
const pathToDestinationFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const sourceStream = createReadStream(pathToSourceFile);
const gzipStream = createGunzip();
const destinationStream = createWriteStream(pathToDestinationFile);

const decompress = async () => {
    try {
        await pipeline(sourceStream, gzipStream, destinationStream);
        console.log('File decompressed successfully!');
    } catch {
        throw new Error('FS operation failed');
    }
};

await decompress();