const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/isuru1980/Red-Dragon-Bot/blob/main/images/Red%20and%20Black%20Square%20Community%20Logo%20(1).jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Red Dragon Bot Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
