const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const path = require("path")
const public = require("./public")
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// website
app.use(public)

// import modules
const integer = require('./api/integer')
const boolean = require('./api/boolean')
const date = require('./api/date')
const color = require('./api/color')

// use module imports
app.use(integer)
app.use(boolean)
app.use(date)
app.use(color)

app.listen(process.env.PORT || 5000)