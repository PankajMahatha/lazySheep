const express = require('express')
const path = require('path')
const app = new express()

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
    })

    app.get('/contact',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'contact.html'))
        })

    app.get('/post',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'post.html'))
        })
    
app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'index.html'))
})

app.listen(3000,() => {
    console.log('App Listening on port 3000')
})