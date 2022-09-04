const express = require("express")
const random = require("random")
const router = express.Router()

router.get("/api/integer", function(req, res) {
    var min = 0
    var max = 9
    try {
        if(req.query.min){
            min = req.query.min
        }

        if(req.query.max){
            max = req.query.max
        }
        const randomNum = random.int((min = parseInt(min)), (max = parseInt(max-1)))
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