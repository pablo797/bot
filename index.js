require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is Ready!`);
});
 
client.on('message', msg => {
    console.log(msg.content)
  if (msg.content === '!hola') {
    msg.reply('hola!');
  }
});
 
client.login(process.env.token);


