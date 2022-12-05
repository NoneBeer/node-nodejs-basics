import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        fs.readFile(filePath, 'utf-8',(error, data) => {
            if (error) throw error;
            console.log(data);
        })
    }
};

await read();
