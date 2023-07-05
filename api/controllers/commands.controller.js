"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBotMessageHandler = void 0;
const bot_service_1 = require("../application/bot.service");
const compliments_repository_1 = require("../infrastructure/compliments.repository");
const webhook_1 = require("../webhook");
const telegramBotMessageHandler = async (msg, match) => {
    const chatId = msg.chat.id;
    const recivedText = msg.text;
    const userId = msg.from.id;
    const userFirstName = msg.from.first_name;
    const userContactsInfo = {
        chatId: chatId,
        first_name: userFirstName,
        userId: userId
    };
    if (recivedText === '/start') {
        const responseData = bot_service_1.BotService.start();
        await webhook_1.telegramBot.sendSticker(chatId, responseData.stickerURL);
        return webhook_1.telegramBot.sendMessage(chatId, responseData.responseText);
    }
    if (recivedText === '/info') {
        const responseData = bot_service_1.BotService.info(msg.date, msg.chat.username);
        return webhook_1.telegramBot.sendMessage(chatId, responseData.responseText);
    }
    if (recivedText === '/compliment') {
        const responseData = await bot_service_1.BotService.getCompliment();
        return webhook_1.telegramBot.sendMessage(chatId, responseData.responseText);
    }
    if (recivedText === '/register') {
        return webhook_1.telegramBot.sendMessage(chatId, 'Я позже это сделаю');
    }
    if (recivedText === '/set-user-contacts-info') {
    }
    if (recivedText === '/get-user-contacts-info') {
        const userContactsData = await compliments_repository_1.ComplimentsRepository.getAllUserContactsInfo();
        console.log(userContactsData);
        const userJSONData = JSON.stringify(userContactsData);
        return webhook_1.telegramBot.sendMessage(chatId, userJSONData || 'undefined');
    }
    await webhook_1.telegramBot.sendMessage(chatId, recivedText);
    setTimeout(async () => {
        await webhook_1.telegramBot.sendMessage(chatId, 'Прошло ровно 5000 ms с момента как ты писала мне в последний раз...');
    });
    return webhook_1.telegramBot.sendMessage(chatId, 'Мило, что ты написала, но я тебя не понимаю!)');
};
exports.telegramBotMessageHandler = telegramBotMessageHandler;
//# sourceMappingURL=commands.controller.js.map