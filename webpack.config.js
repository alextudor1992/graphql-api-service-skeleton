const os = require('os')
const NodemonPlugin = require('nodemon-webpack-plugin')
const isWin32Runtime = os.platform() === 'win32'
const Dotenv = require('dotenv-webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules')

module.exports = {
  stats: 'minimal',
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    clean: true,
    compareBeforeEmit: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals({ modulesDir: NODE_MODULES_DIR })],
  watchOptions: {
    poll: isWin32Runtime,
    followSymlinks: !isWin32Runtime,
    ignored: '**/node_modules',
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
    usedExports: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
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
        include: path.resolve(__dirname, 'src'),
        exclude: NODE_MODULES_DIR,
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
