const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

// import modules
const integer = require('./api/integer')
const boolean = require('./api/boolean')
const date = require("./api/date")

// use module imports
app.use(integer)
app.use(boolean)
app.use(date)

app.listen(process.env.PORT || 5000)