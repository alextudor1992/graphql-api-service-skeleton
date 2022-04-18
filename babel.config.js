const tsconfig = require('./tsconfig.json');

const aliases = Object.entries(tsconfig.compilerOptions.paths)
  .map(([alias, path]) =>
    alias.includes('/*') ? null : { [alias]: Array.isArray(path) ? path[0] : path },
  )
  .filter((value) => value !== null)
  .reduce((result, current) => Object.assign(result, current), {});

const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-transform-typescript-metadata',
    '@babel/plugin-proposal-class-properties',
    ['module-resolver', { alias: aliases }],
  ],
};

switch (process.env.NODE_ENV) {
  case 'production': {
    babelConfig.plugins.push([['transform-remove-console', { exclude: ['error', 'warn'] }]]);
    break;
  }
  case 'development': {
    break;
  }
}

module.exports = babelConfig;
