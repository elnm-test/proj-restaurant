import httpService from './httpService.js'

export default{
    query,
    getById,
    add,
    remove,
    update
}

function query(){
    return httpService.get(`api/meals/`);
}

function getById(id){
    return httpService.get(`api/meals/${id}`)
}

function add(meal){
    return httpService.post('api/meals',meal)
}

function remove(id){
    return httpService.remove(`api/meals/${id}`)
}

function update(meal){
    return httpService.put(`api/meals/`, meal)
}