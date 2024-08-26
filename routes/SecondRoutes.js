
const express = require("express")
const app = express()

app.use(express.json())

const SecondControllers = require("../controllers/SecondControllers")

app.get("/convert/celcius/:celcius", SecondControllers.celcius)
app.get("/convert/reamur/:reamur", SecondControllers.reamur)
app.get("/convert/kelvin/:kelvin", SecondControllers.kelvin)
app.get("/convert/fahrenheit/:fahrenheit", SecondControllers.fahrenheit)

module.exports = app
