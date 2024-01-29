import path from 'path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFilesFolder = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const data = await readFile(pathToFilesFolder, 'utf-8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();