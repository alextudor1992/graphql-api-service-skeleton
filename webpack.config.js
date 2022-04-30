const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const os = require('os')
const NodemonPlugin = require('nodemon-webpack-plugin')
const isWin32Runtime = os.platform() === 'win32'
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'none',
  watch: true,
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
})
