const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");


connection();


const route=require("./Router/Add");
const routeFetch=require("./Router/Fetch");

app.use(express.json());
app.use(cors());



app.use("/",route)
app.use("/api",routeFetch)

const port =  8080;
app.listen(port, console.log(`Listening on port ${port}...`));