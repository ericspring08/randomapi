const express = require("express")
const router = express.Router()
const random = require("random")
const {months, days} = require("./dateData")

router.get("/api/date", function(req, res) {
    const month_index = random.int(0, 11)
    const month = months[month_index]
    const day_amount = days[month_index]
    const day = random.int(1, parseInt(day_amount))

    const date = month + " " + day

    res.json({
        date: date
    })
}) 

module.exports = router