const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
var connectionString = 'mongodb+srv://yoda:yoda@cluster0.lrqzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    app.get('/', (req, res) => {
        console.log('raaaaa');
        const cursor = db.collection('quotes').find();
        console.log(cursor)
        // ...
      })
    //app.post('/quotes', (req, res)=>{
    //    db.collection('quotes').insertOne(req.body).then(result=>{
    //        res.redirect('/');
    //    }).catch(error=>console.error(error));
    //});
  }).catch(console.error)
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.listen(3000, function(){
    console.log('listening on 3000');
});