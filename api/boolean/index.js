const express = require("express")
const router = express.Router()
const random = require("random")

router.get("/api/boolean", function(req, res) {
    res.json({
        boolean: random.boolean()
    })
})

module.exports = router