"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const bot_service_1 = require("../application/bot.service");
const compliments_repository_1 = require("../infrastructure/compliments.repository");
const webhook_1 = require("../webhook");
const start = () => {
    webhook_1.telegramBot.setMyCommands([
        { command: '/start', description: 'Приветствие' },
        { command: '/info', description: 'Получить информацию' },
        { command: '/compliment', description: 'Получить случайный комплиент' },
        { command: '/register', description: 'Подписаться на рассылку комплиментов' },
    ]);
    webhook_1.telegramBot.on('message', async (msg, match) => {
        const chatId = msg.chat.id;
        const recivedText = msg.text;
        const userId = msg.from.id;
        const userFirstName = msg.from.first_name;
        const userContactsInfo = {
            chatId: chatId,
            first_name: userFirstName,
            userId: userId
        };
        await compliments_repository_1.ComplimentsRepository.addUserContactInfo(userContactsInfo);
        if (compliments_repository_1.ComplimentsRepository.isMoreThenFiveMessages(userId)) {
            webhook_1.telegramBot.sendMessage(chatId, 'sm22_c684a05eff7a40279bc8101a7d76a920_by_Stickery9telegramBot');
        }
        if (recivedText === '/start') {
            const responseData = bot_service_1.BotService.start();
            await webhook_1.telegramBot.sendSticker(chatId, responseData.stickerURL);
            return webhook_1.telegramBot.sendMessage(chatId, responseData.responseText);
        }
        console.log(msg);
        console.log(match);
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
            const userJSONData = JSON.stringify(userContactsData);
            return userJSONData;
        }
        return webhook_1.telegramBot.sendMessage(chatId, 'Мило, что ты написала, но я тебя не понимаю!)');
    });
};
exports.start = start;
//# sourceMappingURL=commands.controller.js.map