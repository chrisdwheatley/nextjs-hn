const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("top", "/", "index");
routes.add("first", "/:type", "index");
routes.add("index", "/:type/page/:page");
routes.add("comments", "/item/:id");
routes.add("user", "/user/:name");
