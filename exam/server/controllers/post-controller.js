const getPost = (req,res) => {
    fetch(' https://jsonplaceholder.typicode.com/posts')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let result = `<h2> User Info From sampleUser.json </h2>`;
        data.forEach((user) => {
            const { id, comment } = user
            console.log(user);
     })

    }
    )}



exports.getPost = getPost;