const express = require('express')
const app = new express()
const path = require('path')

app.use(express.static(path.join(__dirname + '/public')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'))
})

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/contact.html'))
})

// New api to give my say hello with name
app.get('/say-hello', (req, res) => {
    const queryName = req.query.name;

    const str = `Hello ${queryName}`;

    res.json({
        message: 'success',
        data: str,
    });
});

app.get('/post',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/post.html'))
})

app.listen(3000,() => {
    console.log('App listening on port 3000')
})
