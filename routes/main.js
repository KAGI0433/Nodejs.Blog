const express = require('express');
const router = express.Router();
const Post = require('./models/post');

/**
 * GET /
 * HOME
 */



router.get('', async (req, res) => { 
    const locals = {
        title : "NodeJs Blog",
        description: "Blog created with Nodejs, Express & MongoDb"
    }
    try {
        const data = await Post.find();
        res.render('index', { locals, data });
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




//function insertPostData () {
//    Post.insertMany([{
//        title: "Mihlali Ndamase",
 //       body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its la"
 //   },
 //   {
 //       title: "Puff Diddy",
  //      body: "This psum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Loris the body text" 
  //  },
 //   {
 //       title: "Ice Spice vs Cleo",
  //      body: "This is the body text"

 //   },
 //   {
  //      title: "Owami",
  //      body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still"
  //  },
  //  {
  //      title: "J-zee",
  //      body: "This is theometimes by accident, sometimes on purpose (injected humour and the like). body text" 
  //  }, 
  //  
  //  {
  //      title: "Beyonce",
  //      body: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a" 
  //  },
  //  
  //  {
  //      title: "Puff Diddy",
  //      body: "This is the body text make a type specimen book. It has survived not only five centuries, but also the" 
  //  }, 
  //  
  //  {
  //      title: "Puff Diddy",
    //    body: " is ometimes by accident, sometimes on purpose (injected humour and the like).the body text" 
   // }, 
   // 
   // {
   //     title: "Puff Diddy",
   //     body: "This is the bodyometimes by accident, sometimes on purpose (injected humour and the like). text" 
   // }, 
   // 
   // {
   //     title: "Puff Diddy",
   //     body: "This is the body text" 
   // },
//])
//}
//insertPostData();






