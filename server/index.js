import express from "express";

const app = express();

app.listen(4004, (req, res) => {
  console.log("Server is working");
});
