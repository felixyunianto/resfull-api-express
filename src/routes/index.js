const express = require("express");
const mainRouter = express.Router();

const welcomeRouter = require("./welcome");
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const sizesRouter = require("./sizes");
const searchRouter = require("./search");
const sortingRouter = require("./sorting");
const ratingsRouter = require("./ratings");
// const productsRouter = require("./products");
// const productRouter = require("./product");
// const categoryRouter = require("./category");
// const historiesRouter = require("./histories");
// const searchRouter = require("./search");

mainRouter.use("/", welcomeRouter);
mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/sorting", sortingRouter);
mainRouter.use("/sizes", sizesRouter);
mainRouter.use("/ratings", ratingsRouter);
// mainRouter.use("/products", productsRouter);
// mainRouter.use("/product", productRouter);
// mainRouter.use("/category", categoryRouter);
// mainRouter.use("/histories", historiesRouter);
// mainRouter.use("/search", searchRouter);

module.exports = mainRouter;
