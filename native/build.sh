#!/bin/sh
set -e

em++ -O3 native-module.cpp \
  --js-library library.js \
  -s EXPORTED_FUNCTIONS=_answer_to_life_the_universe_and_everything \
  -s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1 \
  -o native-module.js

mkdir -p ../dist
mv native-module.js native-module.wasm ../dist
