const getFunc = require("../lib/getRequest");
const parseUrl = require("../lib/parseUrl");
const argv = process.argv;

module.exports = () => {
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
