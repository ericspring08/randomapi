const express = require("express")

const router = express.Router()

const random = require("random")

router.get("/api/color", function(req, res) {
    var color = ""

    const codes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    for(var i = 0;i<9;i++) {
        color += codes[random.int((min = 0), (max = codes.length))]
    }

    res.json({
        color: color
    })
}) 


module.exports = router