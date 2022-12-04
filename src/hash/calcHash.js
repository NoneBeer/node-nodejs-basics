import fs from 'fs';
import crypto from "crypto";
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const readStream = fs.createReadStream(pathToFile, 'utf-8');
    let data = '';
    let hash = '';
    readStream.on('data', (chunk) => {
        data += chunk;
    });
    readStream.on('error', (error) => {
        throw error;
    });
    readStream.on('end', () => {
        hash = crypto.createHash('sha256').update(data).digest('hex');
        console.log(hash);
    });
};

await calculateHash();





