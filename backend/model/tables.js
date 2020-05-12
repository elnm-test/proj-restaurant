const fs = require('fs');
const path = require('path');

var data = fs.readFileSync(path.join(__dirname + '/../data/tables.json'));

var tables = JSON.parse(data);
module.exports = tables