const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dep",
  
  async run(client, message, args) {
    let bankm = await db.fetch(`bank_${message.author.id}`)
    let cashm = await db.fetch(`cash_${message.author.id}`)
    let amount = args[0]
    
    if(cashm = 0) {
      message.reply("you dont have any money to deposite!")
      return
    } 
    
    if(amount < 0) {
      message.reply("you cant deposite negative money")
      return
    }
    
    if(db.fetch(`cash_${message.author.id}`) < args[0]) {
      message.reply("you dont have that much money!")
      return
    }
    
    if(amount === "0") {
      message.reply("you cant deposite 0 money stupid")
      return
    }
    if(cashm === null) {
      message.reply("you dont have any money to deposite!")
      return
    }
    
    let deposited = amount
    db.add(`bank_${message.author.id}`, deposited)
    db.subtract(`cash_${message.author.id}`, deposited)
    message.channel.send(`You have sucessfully deposited ✧${deposited} to your bank`)
    
    
    
  }
}