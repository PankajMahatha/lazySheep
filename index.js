const express = require('express')
const app = new express()
const path = require('path')
const mysql = require('mysql')

app.use(express.static(path.join(__dirname + '/public')))

//mysql connection

const con = mysql.createConnection({
    host: "localhost",
    user: "pankaj",
    password:"pankaj123@"

})

con.connect((err) => {
    if(err) throw err
    console.log('connected')
})



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

app.post('/register', (req,res) => {
    const body = req.body
    const name = body.name;
    const email = body.email;
    const phone = body.phone;
    const age = body.age;
    const gender = body.gender;

    const registerUserQuery = "insert into users (name,email,phone,age,gender) values('jam','jam@gmail.com',7658952345,23,'male');"
    con.query(registerUserQuery,(err,result) => {
        if(err) throw err
        console.log(result)
        res.json({
            message: "success",
            result
        })
    })
})

app.listen(3000,() => {
    console.log('App listening on port 3000')
})

