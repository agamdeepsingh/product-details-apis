const express = require("express");

const app = express();

require("./db/conn");

const port = process.env.port || 8000;

app.use(express.json());

app.use(require("./routers/auth"));

app.listen(port, () => {
  console.log(`${port} start`);
});
