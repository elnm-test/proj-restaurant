const { getDates, getDate, addDate, updateDate } = require('./dates.controller');
const express = require('express');
const router = express.Router();

router.get('/', getDates);
router.get('/:dateTime', getDate);
router.post('/', addDate);
router.put('/', updateDate)

module.exports = router;