import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const siblingModule_A = require('./files/a.json');
const siblingModule_B = require('./files/b.json');

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = fileURLToPath(import.meta.url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = siblingModule_A;
} else {
    unknownObject = siblingModule_B;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${pathToFile}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};


// // Common js module
// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');
//
// const random = Math.random();
//
// let unknownObject;
//
// if (random > 0.5) {
//     unknownObject = require('./files/a.json');
// } else {
//     unknownObject = require('./files/b.json');
// }
//
// console.log(`Release ${release()}`);
// console.log(`Version ${version()}`);
// console.log(`Path segment separator is "${path.sep}"`);
//
// console.log(`Path to current file is ${__filename}`);
// console.log(`Path to current directory is ${__dirname}`);
//
// const myServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });
//
// const PORT = 3000;
//
// console.log(unknownObject);
//
// myServer.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//     console.log('To terminate it, use Ctrl+C combination');
// });
//
// module.exports = {
//     unknownObject,
//     myServer,
// };