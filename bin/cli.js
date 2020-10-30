const getFunc = require("../lib/getRequest");
const argv = process.argv;

module.exports = () => {
  const argvUrl = argv[2];
  if (argvUrl && argvUrl.length > 0) {
    getFunc(argvUrl);
  } else {
    console.log(error("Missing url"));
  }
};
