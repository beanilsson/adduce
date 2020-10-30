const http = require("http");
const https = require("https");

const run = (options) => {
  let protocol = "";

  if (options.protocol === "http:") {
    protocol = http;
  } else if (options.protocol === "https:") {
    protocol = https;
  }

  const reqOptions = { ...options, method: "GET" };
  const req = protocol.request(reqOptions, (res) => {
    const statusCode = `Status code: ${res.statusCode}`;
    process.stdout.write(statusCode);
    process.stdout.write("\n");

    res.on("data", (d) => {
      process.stdout.write(d);
      process.stdout.write("\n");
    });
  });

  req.on("error", (err) => {
    console.error(err);
  });

  req.end();
};

module.exports = { run: run };
