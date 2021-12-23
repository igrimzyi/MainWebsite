const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');



app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, '/views'))
app.set('view engine' , 'ejs');

app.use(express.static(__dirname + '/public'));



app.get('/', (req,res,next)=>{
    res.render('tabs/mainPage')
})


app.listen(3000 , ()=>{
    console.log('serving on port 3000');
});