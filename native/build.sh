#!/bin/sh
set -e

em++ -O3 main.cpp \
  --js-library library.js \
  -s EXPORTED_FUNCTIONS=_answer_to_life_the_universe_and_everything \
  -s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1

# Not sure why but rollup can't properly stringify the content of a.out.js
# without removing this bit.
perl -pi -e 's|if\(process\["argv"\].length>1\){.*?}||' a.out.js

mkdir -p ../dist
mv a.out.wasm ../dist
