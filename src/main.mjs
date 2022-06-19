import * as Comlink from "comlink";
import nodeEndpoint from "comlink/dist/esm/node-adapter";
import workerString from "../dist/worker.js"

export default async function init() {
  let worker, obj;
  if (typeof process !== 'undefined' && process?.versions?.node) {
    const { Worker } = await import("worker_threads");
    worker = new Worker(workerString, {eval: true});
    obj = Comlink.wrap(nodeEndpoint(worker));
  } else {
    const workerBlob = new Blob([workerString]);
    worker = new Worker(URL.createObjectURL(workerBlob));
    obj = Comlink.wrap(worker);
  }

  console.log(`Counter: ${await obj.counter}`);
  await obj.inc();
  console.log(`Counter: ${await obj.counter}`);
  
  worker.terminate();
}
