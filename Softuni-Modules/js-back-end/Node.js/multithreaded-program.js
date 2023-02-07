const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) { // isMainThread variable is used to determine whether the code is running on the main thread or on a worker thread.
  // Main thread code
  console.log('Main thread started');

  // Create two worker threads
  const worker1 = new Worker(__filename); //  runs in its own separate thread
  const worker2 = new Worker(__filename); //  runs in its own separate thread

  // Listen to message events from the worker threads
  worker1.on('message', (message) => {
    console.log(`Received message from worker 1: ${message}`);
  });
  worker2.on('message', (message) => {
    console.log(`Received message from worker 2: ${message}`);
  });

  console.log('Main thread ended');
} else {
  // Worker thread code
  console.log(`Worker thread started (ID: ${threadId})`);

  // Send a message to the main thread
  parentPort.postMessage(`Hello from worker (ID: ${threadId})`);

  console.log(`Worker thread ended (ID: ${threadId})`);
}
