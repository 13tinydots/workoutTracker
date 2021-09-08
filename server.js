
 
import express from "express";
import config from "./config.js";
import apiRouter from "./routes.js";
 
const app = express();
 
app.get("/", (_, res) => {
  res.send("Hello World!");
});
 
app.use("/api", apiRouter);
 
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});