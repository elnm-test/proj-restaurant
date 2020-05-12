import httpService from './httpService.js'

export default {
    getTableModel
}

function getTableModel() {
    return httpService.get(`api/tables`);
}