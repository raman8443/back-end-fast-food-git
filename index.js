const express = require("express");
const app = express();

const path = require("path");


app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res)=>{
    res.send("Hola Edu!!!");
});

const PORT = 3000;

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));