import express from 'express';
import {workTimevalidate} from "./middleware/workTimeValidation.js"

const app = express();
const port = 3000;

app.use(workTimevalidate)
app.set("view engine", "pug");
app.set("views", "./views")

app.get("/", (req,res)=>{
    res.render('index');
});

app.get("/services", (req,res)=>{
    res.render('services');
});

app.get("/contact", (req,res)=>{
    res.render('contact');
})