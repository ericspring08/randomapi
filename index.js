const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(bodyParser.urlencoded())


// import modules
const integer = require('./api/integer')
const boolean = require('./api/boolean')

// use module imports
app.use(integer)
app.use(boolean)

app.listen(5000);