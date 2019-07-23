const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parcials');
app.use(express.static(__dirname + '/public'));
//Express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando',

    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);

});