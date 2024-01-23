import path from 'path'
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFileWrongName = path.join(__dirname, 'files', 'wrongFilename.txt');
const pathToFileProperName = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    try {
        await fs.rename(pathToFileWrongName, pathToFileProperName);
    } catch {
        throw new Error ('FS operation failed');
    }
};

await rename();