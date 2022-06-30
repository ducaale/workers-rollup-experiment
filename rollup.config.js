import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/worker.js",
    output: { dir: "dist", format: "umd" },
    plugins: [
      nodeResolve(),
      terser({ warnings: true, mangle: { module: true } }),
      {
        name: "worker-to-string",
        renderChunk: (code) => `export default ${JSON.stringify(code)};`
      }
    ]
  },
  {
    input: "src/main.mjs",
    output: { file: "dist/main.mjs", format: "esm" },
    plugins: [nodeResolve()]
  }
]
