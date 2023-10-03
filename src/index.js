const express = require("express");
const app = express();
const router = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(router);
app.listen(6000,()=>{console.log("El servidor esta corriendo por el puerto 6000");})