const express = require("express")
const random = require("random")
const router = express.Router()

router.get("/api/float", function(req, res) {
    var digits = 10
    var max = 1
    var min = 0
    var randomNum = 0
    try {
        if(req.query.digits){
            digits = req.query.max
        }

        if(req.query.max) {
            max = req.query.max
        }

        if(req.query.min) {
            min = req.query.min
        }

        

        res.json({
            float: randomNum 
        })
    } catch(e) {
        res.json({
            error: "An error occured"
        })
    }
})

module.exports = router