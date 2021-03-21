const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "bmoney",
  
  async run(client, message, args) {
    db.set(`bank_${message.author.id}`, 100)
  }
}