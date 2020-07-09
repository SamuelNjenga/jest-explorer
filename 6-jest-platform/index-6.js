//jest-worker
//Module used for parallelization of tasks. Exports a class JestWorker that takes the path of Node.js module and lets you call the module's exported methods as if they were class methods, returning a promise that resolves when the specified method finishes its execution in a forked process
// main.js
const Worker = require('jest-worker').default
async function main() {
    const worker = new Worker(require.resolve('./heavy-task.js'));

    // run 2 tasks in parallel with different arguments
    const results = await Promise.all([
        worker.myDilemma({
            name: 'npm start'
        }),
        worker.myDilemma({
            name: 'yarn start'
        }),
        worker.myHeavyTask({
            foo: 'tiger'
        }),
        worker.myHeavyTask({
            bar: 'lion'
        })
    ]);

    console.log(results);
}

main();





