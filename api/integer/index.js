const express = require("express")
const random = require("random")
const router = express.Router()

router.get("/api/integer", function(req, res) {
    var minumum = 0
    var maximum = 10
    try {
        if(req.query.min){
            minumum = req.query.min
        }

        if(req.query.max){
            maximum = req.query.max
        }
        const randomNum = random.int((min = parseInt(minumum)), (max = parseInt(maximum)))
        res.json({
            integer: randomNum 
        })
    } catch(e) {
        res.json({
            error: "An error occured"
        })
    }
})

module.exports = router