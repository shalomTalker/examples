const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", async (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/test", async (req, res, next) => {
  return res.status(200).json({
    message: "Hello from test!",
  });
});

app.get("/hello", async (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
