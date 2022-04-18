const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  stats: 'minimal',
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals({ modulesDir: path.resolve(__dirname, 'node_modules') })],
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
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
