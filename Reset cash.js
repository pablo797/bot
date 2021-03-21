const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "reset",
  
  async run(client, message, args) {
    db.set(`cash_${message.author.id}`, 0)
    db.set(`bank_${message.author.id}`, 0)
  }
}