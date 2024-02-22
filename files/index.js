const { Telegraf } = require('telegraf');
require('dotenv').config();
const fs = require('node:fs/promises');
const { file_reader } = require('./cred_handler.js');

const bot = new Telegraf(process.env.BOT_TOKEN); // Created a new bot object

bot.start((ctx) => ctx.reply('Welcome, I\'m Sahil\'s Manager')); // Starting the bot

try {
    bot.command('add', async (ctx) => { // Add command -> adds the credentials
        // To be included
    });
    bot.command('del', async (ctx) => { // Delete command -> deletes the credentials
        // To be included
    });
    bot.command('creds', async (ctx) => { // Show command -> shows the credentials
        try {
            const data = await file_reader();
            let response = 'These are the saved credentials for now:\n';
            for (const platform in data) {
                response += `${platform}:\n Username - ${data[platform].username}, Password - ${data[platform].password}\n`;
            }
            ctx.reply(response);    
        } 
        catch(error) {
            console.error("Error reading credentials:", error);
            ctx.reply('Error fetching credentials. Please try again later.');
        }
    });

    bot.on('sticker', (ctx) => ctx.reply('🤣'));
    bot.on('text', (ctx) => {
        if(ctx.update.message.text === 'Love You Bro') {
            ctx.reply('Love You too Bro!❤️');
        }
        else if(ctx.update.message.text === 'Arigato! Ore no Nakama') {
            ctx.reply('Un placer mi querido amigo');
        }
        else {
            ctx.reply('I can\'t understand human languages!');
        }
    });
} 
catch {
    console.log("Unexpected Command");
}
bot.launch();