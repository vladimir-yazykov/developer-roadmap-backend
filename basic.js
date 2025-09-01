import express from "express";
import roadmap from "./data/roadmap.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(roadmap);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
