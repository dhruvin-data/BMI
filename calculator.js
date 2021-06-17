const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var bmi='';
app.get("/", function(req, res){
    res.render('bmi',{userBmi:bmi});
});

app.post("/", (req, res)=>{
    
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    bmi = (weight / (height * height)) * 10000;
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
