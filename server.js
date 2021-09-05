const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 8080


app.get('/', (req, res) => {
    res.send('welcome to my project')
})

app.get('/products', (req, res) => {

    res.send('Amazons product Lists')
})
//query parameters
app.get('/cars', (req, res) => {

    const v = req.query.car
    const p = req.query.bike
    res.send(`you have selceted ${v} and ${p}`)

})
//path parameters
app.get('/parts/:phone', (req, res) =>{

    let phone = req.params.phone
    res.send(`Your phone is: ${phone}`)


})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

