const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const os = require('os')
const NodemonPlugin = require('nodemon-webpack-plugin')
const isWin32Runtime = os.platform() === 'win32'
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` })

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
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenv.parsed,
        NODE_ENV: 'localhost',
      }),
    }),
    new NodemonPlugin(),
  ],
})
