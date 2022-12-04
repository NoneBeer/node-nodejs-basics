import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        fs.rm(filePath, (error) => {
            if (error) throw error;
        });
    }
};

await remove();
