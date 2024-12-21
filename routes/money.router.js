const router = require('express').Router();

const { startSession } = require('mongoose');
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

//Chuyen tien A -> B 
router.post('/v1/api/transfer', async (req, res) => {
    const session = await startSession();
    try {
        const {fromId, toId, amount} = req.body;
        //create startSession
        session.startTransaction();

        const amountFrom = await money.findOneAndUpdate({
            userId: fromId,
        }, {
            $inc: {amount: -amount}
        }, {session, new: true});

        console.log(`Account ${fromId} has ${amountFrom}`);

        const amountTo = await money.findOneAndUpdate({
            userId: toId,
        }, {
            $inc: {amount: +amount}
        }, {session, new: true});

        console.log(`Account ${toId} has ${amountTo}`);

        return res.json({
            msg: 'Transfer success',
        })
    } catch (error) {
        console.error('Error Transactions', error);
        return res.json({
            msg: 'Transfer fail',
        })
        
    }
})

module.exports = router;