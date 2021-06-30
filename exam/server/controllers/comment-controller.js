const getComment = (req,res) => {
    r=req.get(' https://jsonplaceholder.typicode.com/posts')
    console.log(r.json());

}

exports.getComment = getComment;