const db = require("quick.db");
const Discord = require("discord.js")

module.exports = {
  name: "bal",
  
  async run(client, message, args) {
    let cash = await db.fetch(`cash_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)
    if(cash === null) cash = 0;
    if(bank === null) bank = 0;
    let embed = new Discord.MessageEmbed()
      .setTitle(`| ${message.author.username}'s balance. |`)
      .setDescription(`**Cash**: ✧${cash} \n ———————————————— \n **Bank**: ✧${bank}`)
    message.channel.send(embed)
  }
}