const os = require('os')
const NodemonPlugin = require('nodemon-webpack-plugin')
const isWin32Runtime = os.platform() === 'win32'
const Dotenv = require('dotenv-webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  stats: 'minimal',
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: 'none',
  watch: true,
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals({ modulesDir: path.resolve(__dirname, 'node_modules') })],
  watchOptions: {
    poll: isWin32Runtime,
    followSymlinks: !isWin32Runtime,
    ignored: '**/node_modules',
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
  performance: {
    hints: 'warning',
  },
  plugins: [new Dotenv(), new NodemonPlugin()],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  experiments: {
    topLevelAwait: true,
  },
}
