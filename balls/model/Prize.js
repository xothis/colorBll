var mongoose = require('mongoose');
var db = require('../db.js');

var prizeSchema = new mongoose.Schema({
    date: String,
    issue: String,
    numbers: Object
});

prizeSchema.methods.toString = function () {
    var reds = this.numbers.reds.toString();
    return this.date + ' ' + this.issue +
        ' 红球 ' + reds.red +
        ' 蓝球 ' + this.numbers.blue.cyan;
};

//module.exports = Prize;
module.exports = db.model('Prize', prizeSchema);