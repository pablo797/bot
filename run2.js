const Discord = require("discord.js");
const config = require("../config.json")

module.exports = {
  name: "run",
  
  async run (client, message, args) {
  let ping = "@everyone"
    
    message.guild.channels.cache.forEach(channel => {
      if(channel.type === "text")
        channel.send(ping);
      })
    }
}
