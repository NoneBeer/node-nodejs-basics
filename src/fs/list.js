import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    const dirPath = path.join(__dirname, 'files');

    if (!fs.existsSync(dirPath)) {
        throw new Error ('FS operation failed');
    } else {
        fs.readdir(dirPath, (error, files) => {
            if (error) throw error;
            console.log(files);
        } );
    }
};

await list();
