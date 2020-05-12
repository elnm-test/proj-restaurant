module.exports = {
    getRndNum : function(min,max){
        return Math.floor(Math.random() * (max-min + 1) + min)
    }
}