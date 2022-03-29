const express = require("express");
const app = express();

const citiesRouter = require("./src/controllers/cities.controller");
const errorHandler = require("./src/middlewares/error-handler.middleware");

const port = 3000;

app.use(express.json());

app.use("/cities", citiesRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
