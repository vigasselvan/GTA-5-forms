const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin-vigas:welcome123@cluster0.yieowhx.mongodb.net/formDB");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const formSchema = {
    name: String,
    dob: Date,
    phone: Number,
    exp: Number,
    rating: String,
    time: String,
    favCode: String,
    compMonth: Number,
    lvl: Number,
    feedback: String
};

const Form = mongoose.model("form", formSchema);

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/lastPage', (req, res) =>{
    res.render('lastPage');
});

app.get('/success', (req, res) => {
    res.render('success');
});

app.post('/lastPage', (req, res) => {
    
    const form = new Form({
        name: req.body.name,
        dob: req.body.dob,
        phone: req.body.phone,
        exp: req.body.exp,
        rating: req.body.rating,
        time: req.body.time,
        favCode: req.body.favCode,
        compMonth: req.body.compMonth,
        lvl: req.body.lvl,
        feedback: req.body.feedback
    });

    form.save();

    res.redirect('success');
});








app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
