const express = require("express");
const Pizza = require('./models/pizzaModel')

const app = express();

db = require('./db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas', pizzasRoute);
app.use('/api/users/',userRoute)

app.get("/", (req, res) => {
    res.send("Server working");
})

app.get("/getpizzas", (req, res) => {
    Pizza.find({}, (err, docs) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs);
        }
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port "+port));
