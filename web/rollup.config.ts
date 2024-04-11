import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

import type {RollupOptions} from 'rollup';

const config: RollupOptions = {
  input: './src/main.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    json(),
    terser(),
    typescript({
      sourceMap: true,
    }),
  ],
};

export default config;
