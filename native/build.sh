#!/bin/sh
set -e

em++ -O3 main.cpp \
  --js-library library.js \
  -s EXPORTED_FUNCTIONS=_answer_to_life_the_universe_and_everything \
  -s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1

mkdir -p ../dist
mv a.out.wasm ../dist
