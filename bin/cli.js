const getFunc = require("../lib/getRequest");
const argv = process.argv;

module.exports = () => {
  const argvUrl = argv[2];
  const filter = argv[3] ? argv[3] : "";
  const acceptedFilters = ["--ping", "--body"];

  if (argvUrl && argvUrl.length > 0) {
    if (filter.length > 0) {
      if (acceptedFilters.some((acceptedFilter) => acceptedFilter === filter)) {
        getFunc(argvUrl, filter);
      } else {
        console.error("Filter not supported:", filter);
      }
    } else {
      getFunc(argvUrl);
    }
  } else {
    console.error("Missing url");
  }
};
