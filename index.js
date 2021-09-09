const express = require('express')
const app = new express()
const path = require('path')

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'))
})

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/contact.html'))
})

app.get('/post',(req,res) => {
    res.sendFile(path.join(__dirname + '/public/post.html'))
})

app.listen(3000,() => {
    console.log('App listening on port 3000')
})
