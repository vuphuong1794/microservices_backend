const router = require('express').Router();

const money = require('../models/money.model');

//tao ATM
router.post('/v1/api/user', async (req, res) => {
    try{
        const {userId, amount} = req.body;
        const rs = await money.create({userId, amount});
        res.json({data: rs});
    }catch(err){
        res.json(err);
    }
})

//chuyen tien A -> B 
router.post('/v1/api/transfer', async (req, res) => {

})

module.exports = router;