import path from 'path';
import { createReadStream }  from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const { createHash } = await import('node:crypto');

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToCalcHashedFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(pathToCalcHashedFile);

    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            const calculatedHash = hash.digest('hex');
            console.log(calculatedHash);
        }
    });
};

await calculateHash();