const express = require('express');
const router = express.Router();

//Routes
router.get('', (req, res) => {
    res.render('index');
});


router.get('/individualpost', (req, res) => {
    res.render('individualpost');
});

router.get('/newpostform', (req, res) => {
    res.render('newpostform');
});



module.exports = router;