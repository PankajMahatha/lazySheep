const express = require('express')
const path = require('path')
const app = new express()

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname + '/about.html'));
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname + '/contact.html'));
})

app.get('/post',(req,res)=>{
    res.sendFile(path.join(__dirname + '/post.html'));
})
    
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000,() => {
    console.log('App Listening on port 3000')
})