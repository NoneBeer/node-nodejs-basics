import path from 'path'
import os from 'os';
import wt from "worker_threads";
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
    const pathToWorker = path.join(__dirname, 'worker.js');
    let number = 10;
    const workers = [];

    for(let i = 0; i < os.cpus().length; i++){
        workers.push(
            new Promise((resolve) => {
                new wt.Worker(pathToWorker, { workerData: number + i })
                    .on('message', result => {
                        resolve({ status: 'resolved', data: result});
                    })
                    .on('error', error => {
                        resolve( { status: 'error', data: null});
                    })
            })
        )
    }
    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();
