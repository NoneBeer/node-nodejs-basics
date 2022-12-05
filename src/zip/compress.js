import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToArchive);
    readStream.pipe(zlib.createGzip()).pipe(writeStream)
};

await compress();
