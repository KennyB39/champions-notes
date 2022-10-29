const port =  3001;

const express = require('express');
const app = express(); 

const fs = require('fs');
const path = require('path');

const apiRoutes = require( '../apiroutes.js')