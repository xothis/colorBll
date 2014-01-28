var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'balls');

module.exports = db;
