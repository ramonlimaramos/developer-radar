const { Router } = require("express");
const DevControllers = require("./controllers/DevControllers");
const SearchControllers = require("./controllers/SearchControllers");

const routes = Router()

routes.get("/devs", DevControllers.index);
routes.post("/devs", DevControllers.store);

routes.get("/search", SearchControllers.index);

module.exports = routes;