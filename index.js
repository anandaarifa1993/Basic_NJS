const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extented: true }))


app.use(cors())


const praktikum = require("./routes/praktikumRoutes")
const FirstRoutes = require("./routes/FirstRoutes")
const SecondRoutes = require("./routes/SecondRoutes")
const ThirdRoutes = require("./routes/ThirdRoutes")
const FourthRoutes = require("./routes/FourthRoutes")


app.use("/praktikum", praktikum)
app.use("/FirstRoutes", FirstRoutes)
app.use("/SecondRoutes", SecondRoutes)
app.use("/ThirdRoutes", ThirdRoutes)
app.use("/FourthRoutes", FourthRoutes)


app.listen(8000, () => {
    console.log("Server berjalan di port 8000");
})