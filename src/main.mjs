import * as Comlink from "comlink";
import nodeEndpoint from "comlink/dist/esm/node-adapter";
import workerString from "../dist/worker.js"

export default async function run() {
  let worker, obj;
  // TODO: check https://github.com/rollup/rollup/pull/2785
  let wasmPath = new URL("a.out.wasm", import.meta.url).toString();
  if (typeof process !== "undefined" && process?.versions?.node) {
    const { Worker } = await import("worker_threads");
    const { fileURLToPath } = await import("url");
    worker = new Worker(workerString, {eval: true});
    obj = Comlink.wrap(nodeEndpoint(worker));
    wasmPath = fileURLToPath(wasmPath);
  } else {
    const workerBlob = new Blob([workerString]);
    worker = new Worker(URL.createObjectURL(workerBlob));
    obj = Comlink.wrap(worker);
  }

  await obj.setWasmPath(wasmPath);
  const answer = await obj.answerToLifeTheUniverseAndEverything(wasmPath);
  console.log(answer);
  
  worker.terminate();
}
