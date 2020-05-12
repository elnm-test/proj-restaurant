const tableService = require('./tables.service');

async function getTablesModel(req, res) {
    var tables = await tableService.query();
    res.send(tables)
}

module.exports = {
    getTablesModel
}