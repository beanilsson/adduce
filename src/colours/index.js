const chalk = require('chalk')

const error = chalk.bold.red
const blue = chalk.blue
const red = chalk.red
const warning = chalk.keyword('orange')
const cyan = chalk.cyan

module.exports = {
  error: error,
  blue: blue,
  red: red,
  warning: warning,
  cyan: cyan
}
