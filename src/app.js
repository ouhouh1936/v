import express from "express";
import path from "path";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.get("/", (rep, res) => {
  res.render("index");
});
app.get("/page1", (rep, res) => {
  res.render("page1");
});
app.get("/page2", (rep, res) => {
  res.render("page2");
});
app.get("/page3", (rep, res) => {
  res.render("page3");
});

app.listen(PORT, () => {
  console.log(`${PORT} start server`);
});
