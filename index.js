const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN); // Created a new bot object

bot.start((ctx) => ctx.reply('Welcome, I\'m Sahil\'s Manager')); // Starting the bot

try {
    bot.command('secret', (ctx) => ctx.reply('Nihal is a Puppie!'));

    bot.on('sticker', (ctx) => ctx.reply('❤️'));
    bot.on('text', (ctx) => {
        if(ctx.update.message.text === 'I Love You') {
            ctx.reply('Love You too Bro!❤️');
        }
        else {
            ctx.reply('I can\'t understand human languages!');
        }
    });

    bot.launch();
} catch {
    console.log("Unexpected Command");
}