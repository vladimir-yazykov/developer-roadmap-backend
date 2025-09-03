import express from "express";
import roadmap from "./data/roadmap.js";
import cors from "cors";
import { v4 } from "uuid";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(roadmap);
});

app.post("/", (req, res) => {
  roadmap.push({
    id: v4(),
    ...req.body,
  });
  res.send(roadmap);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = roadmap.findIndex((item) => item.id === id);
  if (index !== -1) {
    roadmap.splice(index, 1);
  }

  res.send(roadmap);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
