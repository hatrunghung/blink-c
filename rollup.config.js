/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from 'rollup-plugin-terser';

const pkg = require(path.resolve('./package.json'));
const babelOptions = require(path.resolve('./babel.config.js'));
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', plugins: [terser()] },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    commonjs(),
    peerDepsExternal(),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      exclude: 'node_modules/**',
      ...babelOptions,
      extensions,
    }),
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions,
    }),
    typescript({
      check: false,
      useTsconfigDeclarationDir: true,
    }),
    cleanup({
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      sourcemap: false,
    }),
    replace({
      '{{PACKAGE_VERSION}}': pkg.version,
      preventAssignment: true,
    }),
  ],
};
