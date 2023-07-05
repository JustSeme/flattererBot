"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const helpers_1 = require("../helpers");
const compliments_repository_1 = require("../infrastructure/compliments.repository");
exports.BotService = {
    start() {
        return {
            stickerURL: 'https://tlgrm.ru/_/stickers/364/159/364159a8-d72f-4a04-8aa1-3272dd144b06/4.webp',
            responseText: 'Привет, красотка! Я самый льстивый бот в телеграме. Если хочешь чтобы я радовал тебя коплиментами ежедневно - подпишись на рассылку командой /register'
        };
    },
    info(currentUserDate, username) {
        const timeOfDay = (0, helpers_1.getTimeOfDay)(currentUserDate);
        return { responseText: `Ты всегда так нежно спрашиваешь у меня информацию... Сейчас ${timeOfDay} и твоё прекрасное имя - ${username}!` };
    },
    getCompliment() {
        return compliments_repository_1.ComplimentsRepository.getRandomCompliment();
    },
};
//# sourceMappingURL=bot.service.js.map