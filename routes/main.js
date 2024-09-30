const express = require('express');
const router = express.Router();
const Post = require('./models/post');
const { connection } = require('mongoose');

/**
 * GET /
 * HOME
 */



router.get('/', async (req, res) => { 
    
        const allPost = await Post.find();
       
        res.render('index', {posts: allPost});       
});


router.get('/post', (req, res) => {
    res.render('post');
});

router.get("/post/:id", async(req, res) => {

    const { id } = req.params;

    const getPost = await Post.findOne({ _id: id});

    res.render("individualpost", { post: getPost});

});

router.get("/delete/:id", (req,res) => {

     const { id } =req.params;

     Post.deleteOne({_id: id})
     .then(() => {
        console.log("deleted Post successfully!")

        res.redirect("/");
     })
     .catch((err) => console.log(err));
})



router.get("/edit/:id", (req,res) => {
    
})


router.get('/individualpost', (req, res) => {
    res.render('individualpost');
});

router.get('/newpost',  (req, res) => {
    res.render('newpost');
});


router.post("/main", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.send("Please enter all the required credentials!")

        const newPost = new Post({title, content})

        //save the post to the database

        newPost.save()
        .then(() => {
            console.log("Post saved successfully!");
            res.redirect('/')
        })

        .catch(err => console.log(err));
});



module.exports = router;




