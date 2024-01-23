import path from 'path'
import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFilesFolder = path.join(__dirname, 'files');
const pathToDestinationFolder = `${pathToFilesFolder}_copy`;
// const pathToDestinationFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
    try {
        await cp(pathToFilesFolder, pathToDestinationFolder, {
            errorOnExist: true,
            recursive: true,
            force: false
        });
    } catch {
        throw new Error ('FS operation failed');
    }
};

await copy();