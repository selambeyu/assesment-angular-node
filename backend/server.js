const express = require("express");
const app = express();
const PORT = 3000;
const messageRouter = require("./api/routes/message");
const db = require("./api/config/dbconnection");
app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/message", messageRouter);

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
