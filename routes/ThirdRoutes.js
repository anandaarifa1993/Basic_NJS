
const express = require("express")
const app = express()

app.use(express.json())

const ThirdControllers = require("../controllers/ThirdControllers")

app.get("/convert/decimal/:angka", ThirdControllers.decimal)
app.get("/convert/octal/:angka", ThirdControllers.octal)
app.get("/convert/hexadecimal/:angka", ThirdControllers.hexaDecimal)
app.get("/convert/binary/:angka", ThirdControllers.binary)

module.exports = app
