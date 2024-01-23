import path from 'path'
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFreshFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    const dataToWrite = 'I am fresh and young';
    try {
        await writeFile(pathToFreshFile, dataToWrite, {flag: 'wx'});
    } catch {
        throw new Error ('FS operation failed');
    }

};

await create();