const express = require('express');
const postController = require('../controllers/post-controller.js')
const router=express.Router();

router.get("https://jsonplaceholder.typicode.com/posts",postController.getPost)

module.exports=router;
