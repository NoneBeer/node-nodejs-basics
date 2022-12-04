import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

    if (fs.existsSync(pathToFile)) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFile(pathToFile, 'I am fresh and young','utf-8', (error) => {
            if (error) throw error;
        })
    }
};

await create();
