const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "work",
  
  async run(client, message, args) {
    
    let jobs = ['policeman', 'fireman', 'doctor', 'robber', 'asassain', 'streamer', 'fake vtuber', 'pg3d youtuber', 'discord admin']
    let job = jobs[Math.floor(Math.random() * jobs.length)];
    
    function random(min, max) {  
      return Math.floor(
        Math.random() * (max - min + 1) + min
      )
    }
    let gain = random(400, 800)
    db.add(`cash_${message.author.id}`, gain)
    message.channel.send(`You worked as a ${job} and gained ✧${gain}`)
  }
}