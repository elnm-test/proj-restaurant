const express = require('express');
const router = express.Router();
const {getTablesModel} = require('../tables/tables.controller');


router.get('/',getTablesModel);

module.exports = router