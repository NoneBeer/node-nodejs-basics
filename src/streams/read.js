import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(filePath, 'utf-8');
    let data = '';

    readableStream.on('data', (chunk) => {
        data += chunk;
    })
    readableStream.on('error', (error) => {
        throw error;
    })
    readableStream.on('end', () => {
        process.stdout.write(data);
    })
};

await read();
