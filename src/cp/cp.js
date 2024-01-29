import path, {dirname} from 'path';
import {spawn} from 'child_process';
import {fileURLToPath} from 'url';
import process from 'node:process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToScriptFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [pathToScriptFile, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};


// Put your arguments in function call to test this functionality

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
// spawnChildProcess(['123', 456, '789']);
// spawnChildProcess([true, false, '']);

