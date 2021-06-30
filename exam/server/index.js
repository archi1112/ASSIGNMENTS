const mongoose = require("mongoose");
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port=3000;

const postRoutes= require('../server/routes/post-routes')
const commentRoutes=require('./routes/comment-routes.js')


app.use('/post', postRoutes);
app.use('/comments', commentRoutes);

app.listen(port, () => console.log(` app listening on port ${port}!`));