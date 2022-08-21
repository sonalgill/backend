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

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});