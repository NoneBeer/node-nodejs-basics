import cp from "child_process";
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
    const pathToFile = path.join(__dirname, 'files', 'script.js')
    const childProcess = cp.fork(pathToFile, args, { silent: true });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['hi', 'my', 'name', 'is', 'Slim', 'Shady']);
