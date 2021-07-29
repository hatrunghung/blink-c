/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import analyze from 'rollup-plugin-analyzer';
import filesize from 'rollup-plugin-filesize';

const pkg = require(path.resolve('./package.json'));
const babelOptions = require(path.resolve('./babel.config.js'));
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externalList = [
  'react',
  'react-dom',
  'prop-types',
  'styled-components',
  /@babel\/runtime/,
];
const outputData = [
  { file: pkg.main, format: 'cjs' },
  { file: pkg.module, format: 'esm' },
];
const outputName = 'blink';

export default {
  input: 'src/index.ts',
  output: outputData.map(({ file, format }) => ({
    file,
    format,
    name: outputName,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'styled-components': 'styled',
    },
  })),
  external: externalList,
  plugins: [
    commonjs(),
    peerDepsExternal(),
    babel({
      babelHelpers: 'runtime',
      babelrc: false,
      exclude: /node_modules/,
      ...babelOptions,
      extensions,
    }),
    nodeResolve({
      browser: true,
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
    analyze(),
    filesize(),
  ],
};
