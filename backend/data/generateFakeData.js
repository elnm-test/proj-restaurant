const fs = require('fs');
const helpers = require('../services/utilService');

//Generate fake Table Data
// var tables = [];
// var tablesNum = helpers.getRndNum(15, 22);
// var locations = ['patio', 'bar', 'inside', 'roof']
// for (let i = 0; i < tablesNum; i++) {
//     let table = {
//         name: `Table ${i + 1}`,
//         capacity: helpers.getRndNum(2, 8),
//         location: locations[helpers.getRndNum(0, 3)],
//         isAvaliable: true,
//         reservation: null
//     }
//     tables.push(table);
// }

// var data = JSON.stringify(
//     tables
// );

// fs.writeFileSync(__dirname + "/tables.json", data)

//Generate fake Date Data 
var datesObj = {};
var datesArr = [];
const savedDateNum = 10;
const times = ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
// const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
// ];

// for (let i = 0; i < savedDateNum; i++) {
// let monthIdx = helpers.getRndNum(new Date().getMonth() ,months.length-1)
//     let monthIdx = new Date().getMonth();
//     let day;
//     if (monthIdx === new Date().getMonth()) {
//         day = helpers.getRndNum(new Date().getDate(), 30);
//     } else {
//         day = helpers.getRndNum(1, 30);
//         if (day < 10) day = '0' + day;
//     }

//     let rndTimeIdx = helpers.getRndNum(0, times.length - 1);
//     let str = `${months[monthIdx]} ${day} 2020 ${times[rndTimeIdx]}`

//     if (!datesObj[str]) datesObj[str] = [];
// }
// console.log(datesObj)

// var tables = require('../model/tables')

// for (date in datesObj) {

//     let updatedTables = tables.map((table) => {
//         if (Math.random() > 0.4) {
//             table.res
//         }
//     })

//     datesArr.push({
//         dateTime: date,
//         tables: updatedTables
//     })
// }

// console.log(datesArr)
// var data = JSON.stringify(datesArr);
// fs.writeFileSync(__dirname + "/dates.json", data)


var tables = require('../model/tables')
// var timeMili = 86400000; //24 Hours From new Date();


// for (let i = 0; i < savedDateNum; i++) {
// let num = helpers.getRndNum(1, 4)
// let miliDate = timeMili * num;
// let date = new Date(miliDate);
// let [, month, day, year] = date.toDateString().split(' ');
// let hour = times[helpers.getRndNum(0, times.length - 1)]
// let str = `${month} ${day} ${year} ${hour}`

//     if(!datesObj[miliDate]) datesObj[miliDate] = [];
//     else --i;
// }

// console.log(tables)
// for (date in datesObj) {




for (let i = 0; i < savedDateNum; i++) {
    let tablesCopy = JSON.parse(JSON.stringify(tables))
    datesArr.push({
        dateTime: null,
        tables:tablesCopy
    })
    for(let j = 0 ; j < tablesCopy.length ; j++){
        let rndNum = Math.random();
        if(rndNum > 0.5){
            datesArr[i].tables[j].isAvaliable = false;
            datesArr[i].tables[j].reservation = {
                name:'Israel Israeli',
                email:'israel@gmail.com',
                phone:555
            }
        }
    }
}


var data = JSON.stringify(datesArr);
fs.writeFileSync(__dirname + "/dates.json", data)

