const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json");
const { readdirSync } = require("fs");
const { join } = require("path");

client.commands= new Discord.Collection();

const prefix = config.prefix
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on("error", console.error);
 

client.on("ready", () => { 
    console.log(`Invite: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    console.log(`${client.user.tag} is ready!`);
});
client.on("message", async message => {
  
  console.log(`(Server: ${message.guild}) (#${message.channel.name}) (User ID: ${message.author.id}) ${message.author.username}: ${message.content}`)
  
  
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;

        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(config.token)