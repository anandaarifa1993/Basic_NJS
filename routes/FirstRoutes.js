
const express = require("express")
const app = express()

app.use(express.json())

const FirstControllers = require("../controllers/FirstControllers")

app.post("/kubus", FirstControllers.kubus)
app.post("/balok", FirstControllers.balok)
app.post("/tabung", FirstControllers.tabung)
app.post("/Bola", FirstControllers.bola)

module.exports = app
