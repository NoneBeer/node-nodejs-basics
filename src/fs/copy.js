import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    const src = path.join(__dirname, 'files');
    const dest = path.join(__dirname, 'files_copy');

    if (!fs.existsSync(src) || fs.existsSync(dest)){
        throw new Error('FS operation failed');
    } else {
        await fs.cp(src, dest, { recursive: true },(error) => {
            if (error) throw error;
        });
    }
};

copy();
