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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});