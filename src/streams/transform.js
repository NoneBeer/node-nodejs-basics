import stream from 'stream';

const transform = async () => {
    const result = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('').trim() + '\n');
        }
    });
    process.stdin.pipe(result).pipe(process.stdout);
};

await transform();
