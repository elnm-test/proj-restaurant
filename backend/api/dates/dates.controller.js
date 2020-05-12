const dateService = require('./dates.service');
module.exports = {
    getDate,
    getDates,
    addDate,
    updateDate
}

async function getDates(req,res){
    var dates = await dateService.query();
    res.send(dates);
}

async function getDate(req,res){
    var dateTime  = req.params.dateTime;
    var response = await dateService.getByDate(dateTime);
    console.log('Response',response)
    res.send(response)
};

async function addDate(req,res){
    var date = req.body;
    var addedDate = await dateService.add(date);
    res.send(addedDate)
}

async function updateDate(req,res){
    var date = req.body;
    var updatedDate = await dateService.update(date);
    res.send(updatedDate)
}