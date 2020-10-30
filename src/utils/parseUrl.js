const colours = require('../colours')

const error = colours.error

module.exports = urlString => {
  try {
    const url = new URL(urlString)
    return {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      protocol: url.protocol
    }
  } catch (err) {
    console.log(error(err.code + ':', err.input))
    return
  }
}
