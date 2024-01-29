import {Transform} from 'stream';
import process from 'node:process';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk,
                  encoding,
                  callback
        ) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            this.push(reversedChunk);
            callback();
            //callback(null, chunk); или это
        },
    });
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();