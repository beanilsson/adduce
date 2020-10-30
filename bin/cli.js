const getFunc = require("../src/getRequest");
const parseUrl = require("../src/parseUrl");
const argv = process.argv;

const run = () => {
  const argvUrl = argv[2];
  if (argvUrl && argvUrl.length > 0) {
    const options = parseUrl(argvUrl);
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
