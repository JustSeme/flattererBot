import { BotService } from "../application/bot.service"
import { ComplimentsRepository } from "../infrastructure/compliments.repository"
import { UserContactsInfo } from "../infrastructure/userContactsInfoType"
import { telegramBot } from "../webhook"


export const telegramBotMessageHandler = async (msg, match) => {
    const chatId = msg.chat.id
    const recivedText = msg.text
    const userId = msg.from.id
    const userFirstName = msg.from.first_name

    const userContactsInfo: UserContactsInfo = {
        chatId: chatId,
        first_name: userFirstName,
        userId: userId
    }

    if (recivedText === '/start') {
        const responseData = BotService.start()

        await telegramBot.sendSticker(chatId, responseData.stickerURL)
        return telegramBot.sendMessage(chatId, responseData.responseText)
    }

    if (recivedText === '/info') {
        const responseData = BotService.info(msg.date, msg.chat.username)
        return telegramBot.sendMessage(chatId, responseData.responseText)
    }

    if (recivedText === '/compliment') {
        const responseData = await BotService.getCompliment()
        return telegramBot.sendMessage(chatId, responseData.responseText)
    }

    if (recivedText === '/register') {
        return telegramBot.sendMessage(chatId, 'Я позже это сделаю')
    }


    if (recivedText === '/set-user-contacts-info') {
        //await ComplimentsRepository.addUserContactInfo(userContactsInfo)
    }

    if (recivedText === '/get-user-contacts-info') {
        const userContactsData = await ComplimentsRepository.getAllUserContactsInfo()
        console.log(userContactsData);
        const userJSONData = JSON.stringify(userContactsData)
        return telegramBot.sendMessage(chatId, userJSONData || 'undefined')
    }
    await telegramBot.sendMessage(chatId, recivedText)

    await setTimeout(async () => {
        await telegramBot.sendMessage(chatId, 'Прошло ровно 5000 ms с момента как ты писала мне в последний раз...')
    })

    return telegramBot.sendMessage(chatId, 'Мило, что ты написала, но я тебя не понимаю!)')
}