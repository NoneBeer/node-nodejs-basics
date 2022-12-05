import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(pathToArchive);
    const writeStream = fs.createWriteStream(pathToFile);
    readStream.pipe(zlib.createUnzip()).pipe(writeStream)
};

await decompress();
