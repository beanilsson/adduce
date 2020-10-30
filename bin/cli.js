const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const getFunc = require("../src/requests/get");
const colours = require("../src/colours");
const parseUrl = require("../src/utils/parseUrl");

const log = console.log;
const error = colours.error;

const run = () => {
  if (argv.get) {
    if (argv.url && argv.url.length > 0) {
      const options = parseUrl(argv.url);
      if (options) {
        getFunc.run(options);
      }
    } else {
      log(error("Missing url"));
    }
  } else {
    log(error("Unknown argument supplied"));
  }
};

module.exports = {
  run: run,
};