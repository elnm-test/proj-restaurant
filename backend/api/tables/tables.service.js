
var gTablesModel = _createTables();

async function _createTables(){
    return await require('../../model/tables.js')
}

async function query(){
    return gTablesModel;
}

module.exports = {
    query
}