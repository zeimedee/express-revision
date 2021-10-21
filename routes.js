const express = require('express');
const router = express.Router();

router.route('/showdem').get((req,res)=>{
    return res.json("alex");
});


module.exports = router;