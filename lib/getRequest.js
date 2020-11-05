const http = require("http");
const https = require("https");
const parseUrl = require("../lib/parseUrl");

module.exports = (argvUrl, filter = "") => {
  const options = parseUrl(argvUrl);
  let protocol = "";

  if (options.protocol === "http:") {
    protocol = http;
  } else if (options.protocol === "https:") {
    protocol = https;
  } else {
    console.error("Unsupported protocol:", options.protocol);
    return;
  }

  const reqOptions = { ...options, method: "GET" };
  const req = protocol.request(reqOptions, (res) => {
    const statusCode = `Status code: ${res.statusCode}`;
    let responseBody = null;

    res.on("data", (data) => {
      responseBody = data;
    });

    switch (filter) {
      case "--ping":
        print(statusCode);
        break;
      case "--body":
        res.on("end", () => {
          print(responseBody);
        });
        break;
      default:
        print(statusCode);
        res.on("end", () => {
          print(responseBody);
        });
        break;
    }
  });

  req.on("error", (err) => {
    console.error(err);
  });

  req.end();
};

const print = (information) => {
  process.stdout.write(information);
  process.stdout.write("\n");
};
