const express = require('express');
const router = express.Router();
const Post = require('./models/post');

/**
 * GET /
 * HOME
 */



router.get('', async (req, res) => { 
    try {
    const locals = {
        title : "NodeJs Blog",
        description: "Blog created with Nodejs, Express & MongoDb"
    }

    
        const data = await Post.find(); 
        res.render('index', {locals, data});
     } catch (error) {
         console.log(error);
     }



   
});







router.get('/individualpost', (req, res) => {
    res.render('individualpost');
});

router.get('/newpostform', (req, res) => {
    res.render('newpostform');
});



module.exports = router;











function insertPostData () {
    Post.insertMany([{
        title: "Building a Blog",
        body: "This is the body text"
    },
    {
        title: "Building a Blog",
        body: "This is the body text" 
    },
    {
        title: "Building a Blog",
        body: "This is the body text"

    },
    {
        title: "Building a Blog",
        body: "This is the body text"
    }
])
}
insertPostData();

