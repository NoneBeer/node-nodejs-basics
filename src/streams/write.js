import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(filePath, 'utf-8');

    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });

    process.stdin.on('error', (error) => {
        writableStream.end();
        throw error;
    });

    process.stdin.on('end', () => {
        writableStream.end();
    })
};

await write();
