const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(bodyParser.urlencoded())


// import modules
const integer = require('./api/integer')

// use module imports
app.use(integer)

app.listen(5000);