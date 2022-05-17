const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://cgheorghedragos:ProiectTD2022@cluster0.qkq9y.mongodb.net/pizza_database?retryWrites=true&w=majority';

mongoose.connect(mongoURL , {useUnifiedTopology:true, useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected', ()=> {
    console.log("Mongo db Connected succesfully");
});

db.on('error', ()=>{
    console.log("MongoDB Connection failed!");
});
;
module.exports = mongoose;   