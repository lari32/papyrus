/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

export default {
  input: './src/main.js',
  output: [
    {
      dir: './dist',
      format: 'esm',
    },
    //  {
    //   file: 'bundle.min.js',
    //   format: 'iife',
    //   name: 'version',
    //   plugin: [terser()]
    // }
  ],
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    // replace({ 'Reflect.decorate': 'undefined' }),
    resolve(),
    json(),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    // summary(),
  ],
};
