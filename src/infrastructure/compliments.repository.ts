import { genRandomInt } from "../helpers"
import { ComplimentsCollection, UserContactsInfoCollection } from "./db"
import { UserContactsInfo } from "./userContactsInfoType"

export const ComplimentsRepository = {
    async getRandomCompliment(): Promise<{ responseText: string }> {
        const complimentsCount = await ComplimentsCollection.countDocuments({})
        const randomId = genRandomInt(0, complimentsCount)
        const randomCompliment = await ComplimentsCollection.findOne({ id: randomId })
        return { responseText: randomCompliment.complimentText }

    },

    async addUserContactInfo(UserContactsInfo: UserContactsInfo) {
        await UserContactsInfoCollection.insertOne({
            'chatId': UserContactsInfo.chatId,
            'first_name': UserContactsInfo.first_name,
            'userId': UserContactsInfo.userId
        })
    },

    async getAllUserContactsInfo() {
        return UserContactsInfoCollection.find({})
    },

    async isMoreThenFiveMessages(userId: number): Promise<boolean> {
        const usersByIdCount = await UserContactsInfoCollection.countDocuments({ userId: userId })
        return usersByIdCount >= 5 ? true : false
    }
}
