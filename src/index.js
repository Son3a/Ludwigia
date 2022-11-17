const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');

console.log(__dirname);

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(5000, ()=>{
    console.log("App listening on port 3000!!!");
})