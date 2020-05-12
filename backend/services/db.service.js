
const mongoClient = require('mongodb').MongoClient;
const config = require('.././config')

module.exports = {
    getCollection
}

const dbName = 'restaurent';
var dbConn = null;


async function getCollection(collectionName) {
    var db = await connect();
    return db.collection(collectionName)
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        var client = mongoClient.connect(config.dbURL, {
            useNewUrlParser: true
            , useUnifiedTopology: true
        });
        var db = (await client).db(dbName);
        dbConn = db;
        return db;
    }
    catch (err) {
        console.log('Error Mongo Connection', err)
        throw err;
    }
}