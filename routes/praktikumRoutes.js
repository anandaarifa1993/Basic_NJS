const express = require("express");
const app = express();

app.use(express.json());

const praktikumControllers = require("../controllers/praktikumControllers");


app.get("/profile/:name/:age", praktikumControllers.profil)
app.post("/bujur_sangkar", praktikumControllers.bujur_sangkar)


module.exports = app