const express = require("express");
const config = require("./config/config");
const appRoute = require("./routes/appRoute");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api/", appRoute);

app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}`)
);
