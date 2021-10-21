const express = require('express');
const router = express.Router();


router.route('/show').get((req,res)=>{
    return res.json("hello node")
});
router.route('/showdem').get((req,res)=>{
    return res.json("alex");
});


module.exports = router;