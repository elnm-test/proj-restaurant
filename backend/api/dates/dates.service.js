
/*********************** Mongo Service ********************************/
const helpers = require('../../services/utilService')
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    add,
    getByDate,
    update
}

_datesCollection();
var gDatesCollection = null;

async function _datesCollection() {
    if (gDatesCollection) return gDatesCollection;
    const collection = await dbService.getCollection('dates');
    var dates = await collection.find().toArray();

    let datesMap = {}
    let fixedDates = dates.map((date) => {
        if (!date.dateTime || !Object.keys(date.dateTime)) {
            var updatedDateTime = _initFakeDataDateTime(datesMap);
            date.dateTime = updatedDateTime;
        }
        return date;
    })
    gDatesCollection = fixedDates;
    return fixedDates;
}

async function _initFakeDataDateTime(datesMap) {

    const times = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    var timeMili = 86400000; //24 Hours From new Date();
    let num = helpers.getRndNum(1, 4)
    let miliDate = Date.now() + timeMili * num;
    let date = new Date(miliDate);
    let [, month, day, year] = date.toDateString().split(' ');
    let hour = times[helpers.getRndNum(0, times.length - 1)]
    let str = `${month} ${day} ${year} ${hour}`

    if (!datesMap[str]) {
        datesMap[str] = 'exist'
        return str;
    }
    else return _initFakeDataDateTime(datesMap)

}


async function query() {
    try {
        return await _datesCollection();
    }
    catch (err) {
        console.log('Error Date Query Function');
        throw err;
    }
}

async function getByDate(dateTime) {
    var date = gDatesCollection.find((date) => {

        return date.dateTime == dateTime
    })
    return (date) ? date : '';
}

async function add(date) {
    const collection = await dbService.getCollection('dates');
    try {
        await collection.insertOne(date);
        gDatesCollection.push(date);
        return date;

    }
    catch (err) {
        console.log('Error Add Date Function')
        throw err;
    }
}

async function update(date) {
    const collection = await dbService.getCollection('dates');
    try {
        await collection.replaceOne({ "dateTime": date.dateTime }, { $set: date })

        return date;
    }
    catch (err) {
        console.log('Dates Update Function');
        throw err;
    }
}




































/***********************Json service********************************/

// const fs = require('fs')
// const path = require('path')
// const helpers = require('../../services/utilService')
// var gDates =  _createDates();

// module.exports = {
//     query,
//     getByDate,
//     add,
//     remove,
//     update
// }

// function _createDates() {
//     let dates = require('../../data/dates.json');
//     //For Closure / reference Purpose !
//     let datesMap = {}
//     let fixedDates = dates.map((date) => {
//         if (!date.dateTime || !Object.keys(date.dateTime)) {
//             var updatedDateTime = _initFakeDataDateTime(datesMap);
//             date.dateTime = updatedDateTime;
//         }
//         return date;
//     })
//     return fixedDates;
// }

// async function _initFakeDataDateTime(datesMap) {

//     const times = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
//     var timeMili = 86400000; //24 Hours From new Date();
//     let num = helpers.getRndNum(1, 4)
//     let miliDate = Date.now() + timeMili * num;
//     let date = new Date(miliDate);
//     let [, month, day, year] = date.toDateString().split(' ');
//     let hour = times[helpers.getRndNum(0, times.length - 1)]
//     let str = `${month} ${day} ${year} ${hour}`

//     if (!datesMap[str]) {
//         datesMap[str] = 'exist'
//         return str;
//     }
//     else return _initFakeDataDateTime(datesMap)

// }



// async function query() {
//     return gDates;
// }

// async function getByDate(dateTime) {
//     var date = gDates.find((date) => {

//         return date.dateTime == dateTime
//     })
//     return (date) ? date : '';
// }

// async function remove(dateTime) {
//     var idx = gDates.findIndex((date) => date.dateTime === dateTime)
//     gDates.splice(idx, 1);
//     _saveToFile();
//     return;
// }

// async function add(date) {
//     await gDates.push(date);
//     _saveToFile();
//     return date;
// }

// async function update(date) {
//     var idx = gDates.findIndex((currDate) => { return currDate.dateTime === date.dateTime });
//     if (idx !== -1) gDates.splice(idx, 1, date);
//     else return;
//     _saveToFile();
//     return date;
// }

// function _saveToFile() {
//     return fs.writeFileSync(path.join(__dirname, '../../data/dates.json'), JSON.stringify(gDates, null, 2))
// }

/*********************** End Json service********************************/

// Testing
// console.log(query(), getByDate("Apr 29 2020 19:00"), remove("Apr 29 2020 19:00"), getByDate("Apr 29 2020 19:00"))
// add({
//     dateTime: "Apr 29 20202020 19:00",
//     tables: []
// })

// console.log(query())
// update({
//     dateTime: "Apr 29 20202020 19:00",
//     tables: ['1','2','3']
// })
// console.log(update({
//     dateTime: "Apr 29 2020202w0 19:00",
//     tables: ['1','1','1']
// }))
// console.log(query())