import {Transform} from 'stream';
import process from 'node:process';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk,
                  encoding,
                  callback
        ) {
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');
            const transformedChunk = reversedChunk + '\n';
            this.push(transformedChunk);
            callback();
        },
    });

    reverseTransform.on('error', (error) => {
        console.error('An error occurred during text reversal:', error);
    });
    process.stdin.on('error', (error) => {
        console.error('An error occurred while reading input:', error);
    });
    process.stdout.on('error', (error) => {
        console.error('An error occurred while writing output:', error);
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();