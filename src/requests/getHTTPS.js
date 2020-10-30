const https = require('https')
const colours = require('../colours')

const cyan = colours.cyan
const error = colours.error

const run = options => {
  const reqOptions = { ...options, method: 'GET' }
  const req = https.request(reqOptions, res => {
    const statusCode = `Status code: ${cyan(res.statusCode)}`
    process.stdout.write(statusCode)
    process.stdout.write('\n')

    res.on('data', d => {
      process.stdout.write(d)
      process.stdout.write('\n')
    })
  })

  req.on('error', err => {
    console.error(error(err))
  })

  req.end()
}

module.exports = { run: run }
