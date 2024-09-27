const express = require('express');
const router = express.Router();

//Routes
router.get('', (req, res) => {
    res.render('index');
});


router.get('/individualpost', (req, res) => {
    res.render('individualpost');
});



module.exports = router;