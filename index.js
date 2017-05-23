const { createServer } = require("http");
const { parse } = require("url");
const { join } = require("path");
const next = require("next");
const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const pagesHandler = routes.getRequestHandler(app);

function staticHandler(req, res) {
  const parsedUrl = parse(req.url, true);
  const rootStaticFiles = ["/service-worker.js"];
  if (parsedUrl.pathname === '/favicon.ico') {
    const filePath = join(__dirname, "static", parsedUrl.pathname);
    app.serveStatic(req, res, filePath);
  }

  if (rootStaticFiles.includes(parsedUrl.pathname)) {
    const filePath = join(__dirname, ".next", parsedUrl.pathname);
    app.serveStatic(req, res, filePath);
  } else {
    pagesHandler(req, res, parsedUrl);
  }
}

app.prepare().then(() => {
  createServer(staticHandler).listen(3000);
});
