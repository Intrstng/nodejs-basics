import path from 'path';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFileDelete = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(pathToFileDelete, {
            force: false,
            recursive: true
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();