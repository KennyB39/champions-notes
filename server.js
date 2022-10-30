const PORT =  3001;

const express = require('express');
const app = express(); 

const fs = require('fs');
const path = require('path');

const apiRoutes = require( './apiRoutes/apiRoutes');
const htmlRoutes = require('./apiRoutes/htmlRoutes');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () =>{
    console.log(`API server on port ${PORT}`)
})