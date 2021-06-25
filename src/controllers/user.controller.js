const express = require('express');
const {body, validationResult} = require('express-validator')

const validator = require('../middlewares/validator')

const router = express.Router();

const User = require("../models/user.model")

router.post('/', validator({
    first_name: ["required", "minLength:4:characters", "maxLength: 20:characters"],
    last_name: ["required"],
    email: ["required", "email"],
    pincode: ["required", "exactLength:6:digits"]
}), async (req, res) => {

    if(Object.keys(req.errors).length > 0) {
        return res.status(400).json({data: req.errors})
    }
    
    const user = await User.create(req.body);

    return res.status(201).json({data: user})
    

})

module.exports = router;