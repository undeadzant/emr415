var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



var emr = [
    {id: '01', name: 'Greg', message: 'Flu'},
    {id: '02', name: 'Amy', message: 'Fever'}
]

app.get('/emr', (req, res) => {
    res.send(emr)
})

app.get('/emr/:id', (req, res) => {
    res.send(emr)
})

app.post('/emr', (req, res) => {
    emr.push(req.body)
    res.sendStatus(200)
})

var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})