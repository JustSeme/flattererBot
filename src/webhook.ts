import * as dotenv from 'dotenv'
import TelegramBot = require('node-telegram-bot-api')
import { telegramBotMessageHandler } from './controllers/commands.controller';

dotenv.config()

export const telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

module.exports = async (request, response) => {
    try {
        //Current bot commands
        telegramBot.setMyCommands([
            { command: '/start', description: 'Приветствие' },
            { command: '/info', description: 'Получить информацию' },
            { command: '/compliment', description: 'Получить случайный комплиент' },
            { command: '/register', description: 'Подписаться на рассылку комплиментов' },
        ])

        const { body } = request;

        if (body.message) {
            await telegramBotMessageHandler(body.message, body.match)
        }
    }
    catch (error) {
        console.error('Error sending message');
        console.log(error.toString());
    }

    response.send('OK');
};