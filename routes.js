const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("home", "/", "index");
routes.add("index", "/:type");
routes.add("comments", "/item/:id");
routes.add("user", "/user/:name");
