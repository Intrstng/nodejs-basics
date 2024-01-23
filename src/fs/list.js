import path from 'path'
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await readdir(pathToFolder);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();