"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBot = void 0;
const dotenv = __importStar(require("dotenv"));
const TelegramBot = require("node-telegram-bot-api");
dotenv.config();
exports.telegramBot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
module.exports = async (request, response) => {
    try {
        const { body } = request;
        if (body.message) {
            const { chat: { id }, text } = body.message;
            const message = `Hello Tsc`;
            await exports.telegramBot.sendMessage(id, message, { parse_mode: 'Markdown' });
        }
    }
    catch (error) {
        console.error('Error sending message');
        console.log(error.toString());
    }
    response.send('OK');
};
//# sourceMappingURL=webhook.js.map