const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const getFunc = require("../src/getRequest");
const parseUrl = require("../src/parseUrl");

const run = () => {
  if (argv.url && argv.url.length > 0) {
    const options = parseUrl(argv.url);
    if (options) {
      getFunc.run(options);
    } else {
      console.log("Unsupported protocol:", options.protocol);
    }
  } else {
    console.log(error("Missing url"));
  }
};

module.exports = {
  run: run,
};
