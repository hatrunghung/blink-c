module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: '> 0.5%, last 2 versions, Firefox ESR, not dead',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-typescript',
    'babel-plugin-styled-components',
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: [/data-test/u] }]],
    },
  },
};
