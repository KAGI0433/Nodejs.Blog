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
        let perPage = 70;
        let page = req.query.page || 1;

        const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        res.render('index', { 
            locals,
             data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
         });


    } catch (error) {
        console.log(error);

    } 
        
});

/**
* GET /
* Post :id
*/
router.get('/post/:id', async (req, res) => {  
    try{
       let slug =req.params.id;
   
        const data = await Post.findById({ _id: slug }); 
        
        const locals = {
            title : data.title,
            description: "Blog created with Nodejs, Express & MongoDb"
        }

        res.render('post', {locals, data});
    } catch (error) {
        console.log(error);

    }

    });
    
    /**
    * post /
    * Post - searchTerm
    */
   
    router.post('/search', async (req, res) => {  
    try{
         const locals = {
             title : search,
             description: "Blog created with Nodejs, Express & MongoDb"
         }

         let searchTerm = req.searchTerm;
         const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")
 
         const data = await this.post.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar, i)}},
                { body: { $regex: new RegExp(searchNoSpecialChar, i)}}

            ]
         });

         res.render("search", {
            data,
            locals
         });


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






