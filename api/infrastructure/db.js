"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDB = exports.UserContactsInfoCollection = exports.ComplimentsCollection = void 0;
const mongodb_1 = require("mongodb");
let mongoURI = process.env.MONGO_URI;
const client = new mongodb_1.MongoClient(mongoURI);
const complimentsBotDB = client.db('complimentsBot');
exports.ComplimentsCollection = complimentsBotDB.collection('compliments');
exports.UserContactsInfoCollection = complimentsBotDB.collection('userContactsInfo');
async function runDB() {
    try {
        await client.connect();
        await client.db("complimentsBot").command({ ping: 1 });
        console.log("Connected successfully to MongoDB server");
    }
    catch (err) {
        await client.close();
        console.log(err);
    }
}
exports.runDB = runDB;
//# sourceMappingURL=db.js.map