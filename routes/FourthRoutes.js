
const express = require("express")
const app = express()

app.use(express.json())

const FourthControllers = require("../controllers/FourthControllers")

app.post("/bmi", FourthControllers.bmi)

module.exports = app
