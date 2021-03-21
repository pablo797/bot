const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "with",
  
  async run(client, message, args) {
    let bankm = await db.fetch(`bank_${message.author.id}`)
    let cashm = await db.fetch(`cash_${message.author.id}`)
    let amount = args[0]
    
    if(bankm = 0) {
      message.reply("you dont have any money to withdraw!")
      return
    } 
    
    if(amount < 0) {
      message.reply("you cant withdraw negative money")
      return
    }
    
    if(db.fetch(`bank_${message.author.id}`) < args[0]) {
      message.reply("you dont have that much money!")
      return
    }
    
    if(amount === "0") {
      message.reply("you cant withdraw 0 money stupid")
      return
    }
    if(bankm === null) {
      message.reply("you dont have any money to withdraw!")
      return
    }
    
    let withdrawed = amount
    db.add(`cash_${message.author.id}`, withdrawed)
    db.subtract(`bank_${message.author.id}`, withdrawed)
    message.channel.send(`You have sucessfully withdrawed ✧${withdrawed}`)
    
    
    
  }
}