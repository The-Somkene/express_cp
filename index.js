import express from "express";
import { workTimevalidate } from "./middleware/workTimeValidation.js";

const app = express();
const port = 3000;
app.listen(port);

app.use(workTimevalidate);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.static("res"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("notFound");
});