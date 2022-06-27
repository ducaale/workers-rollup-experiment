# Workers + WASM + Rollup Experiment

Is it possible to use worker in a library that targets both browsers and node? This repo
is a proof of concept of how that could be done.

This work is built on top of the method proposed in this [article](https://justinribeiro.com/chronicle/2020/07/17/building-module-web-workers-for-cross-browser-compatibility-with-rollup/)
and uses [comlink](https://github.com/GoogleChromeLabs/comlink) to bridge the gap between
node's worker-threads and web-workers.

## Running the examples

First, make sure to [install emscripten](https://emscripten.org/docs/getting_started/downloads.html)
and then build the project:

```
npm install
npm run build
```

Once that is done, you can run the project in either Node or the Browser:

* Node: `npm run start:node`
* Web: `npm run start:web` and navigate to http://127.0.0.1:8080/examples/
