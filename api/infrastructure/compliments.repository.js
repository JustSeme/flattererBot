"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplimentsRepository = void 0;
const helpers_1 = require("../helpers");
const db_1 = require("./db");
exports.ComplimentsRepository = {
    async getRandomCompliment() {
        const complimentsCount = await db_1.ComplimentsCollection.countDocuments({});
        const randomId = (0, helpers_1.genRandomInt)(0, complimentsCount);
        const randomCompliment = await db_1.ComplimentsCollection.findOne({ id: randomId });
        return { responseText: randomCompliment.complimentText };
    },
    async addUserContactInfo(UserContactsInfo) {
        await db_1.UserContactsInfoCollection.insertOne({
            'chatId': UserContactsInfo.chatId,
            'first_name': UserContactsInfo.first_name,
            'userId': UserContactsInfo.userId
        });
    },
    async getAllUserContactsInfo() {
        const allUserContactsInfo = await db_1.UserContactsInfoCollection.find({});
        return allUserContactsInfo;
    },
    async isMoreThenFiveMessages(userId) {
        const usersByIdCount = await db_1.UserContactsInfoCollection.countDocuments({ userId: userId });
        return usersByIdCount >= 5 ? true : false;
    }
};
//# sourceMappingURL=compliments.repository.js.map