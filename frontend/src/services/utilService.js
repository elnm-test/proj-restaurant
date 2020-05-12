export default{
    saveToSession,
    loadFromSession
}

function saveToSession(key,value){
    var str = JSON.stringify(value);
    sessionStorage.setItem(key,str)
}

function loadFromSession(key){
    var str = sessionStorage.getItem(key);
    var value = JSON.parse(str);
    return value;
}