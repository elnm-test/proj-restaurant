import httpService from './httpService'

export default{
    query,
    getByDate,
    add,
    update
}

function query(){
    return httpService.get(`api/dates`);
}

function getByDate(dateTime){
    return httpService.get(`api/dates/${dateTime}`)
}

function update(newDate){
    return httpService.put(`api/dates`, newDate)
}

function add(newDate){
    console.log('dataService')
    return httpService.post(`api/dates`,newDate)
}


