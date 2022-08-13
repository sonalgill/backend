const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();
const { default: mongoose } = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sonal-plutonium:5dJokPsnG43EGYHE@cluster0.koc4qx2.mongodb.net/sonal-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
    
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});


app.get('/sol1', function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let n = arr[arr.length - 1]
    let sum = arr.reduce((ini, curr) => ini + curr)
    let missingNumber = (n * (n + 1) / 2) - sum
    res.send({ data: missingNumber })
})

app.get('/sol2', function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let n = arr.length + 1
    let last = arr[arr.length - 1]
    let sum = arr.reduce((ini, curr) => ini + curr)
    let missingNumber = (n * (arr[0] + last) / 2) - sum
    res.send({ data: missingNumber })
})