const express = require('express');
const commentController = require('../controllers/comment-controller.js')
const router=express.Router();

router.get("https://jsonplaceholder.typicode.com/posts",commentController.getComment)

module.exports=router;