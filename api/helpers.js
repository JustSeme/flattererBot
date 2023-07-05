"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRandomInt = exports.getTimeOfDay = void 0;
function getTimeOfDay(date) {
    const currentHour = new Date(date).getHours();
    if (currentHour >= 0 && currentHour <= 6) {
        return 'ночь';
    }
    else if (currentHour >= 6 && currentHour <= 12) {
        return 'утро';
    }
    else if (currentHour >= 12 && currentHour <= 18) {
        return 'день';
    }
    else if (currentHour >= 18 && currentHour <= 0) {
        return 'вечер';
    }
}
exports.getTimeOfDay = getTimeOfDay;
function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
exports.genRandomInt = genRandomInt;
//# sourceMappingURL=helpers.js.map