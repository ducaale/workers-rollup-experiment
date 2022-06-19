import * as Comlink from "comlink"
import nodeEndpoint from "comlink/dist/esm/node-adapter";

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

if (typeof process !== "undefined" && process?.versions?.node) {
  const { parentPort } = require("worker_threads");
  Comlink.expose(obj, nodeEndpoint(parentPort));
} else {
  Comlink.expose(obj);
}
