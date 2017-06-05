const purify = require("purify-css");
const content = ["./pages/*.js", "./components/*.js"];
const css = ["./node_modules/tachyons/css/tachyons.css"];

const options = {
  output: "./node_modules/tachyons/css/tachyons.min.pure.css",
  minify: true,
  info: true
};

purify(content, css, options);
