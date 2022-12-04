import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md')

    if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
        throw new Error('FS operation failed');
    } else {
        fs.rename(oldPath, newPath, (error) => {
            if (error) throw error;
        });
    }
};

await rename();
