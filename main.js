require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.commands = new Discord.Collection()

const cmdFiles = require('fs').readdirSync('./src/commands').filter(file => file.endsWith('.js'))

for (const file of cmdFiles) {
  const cmd = require(`./src/commands/${file}`)
  client.commands.set(cmd.name, cmd)
  console.log(`Comando ${cmd.name} Listo.`)
}


client.on('ready', () => {

  console.log(`Bot Ready 😎, ${client.user.tag} Tiene un eseso de fasha en mas de ${client.guilds.cache.size} servers. 😎`)

})

client.on('message', async (message) => {

  const Prefix = 'abyss!'

  if(message.author.bot) return;
  if(!message.content.startsWith(Prefix)) return;

  const args = message.content.slice(Prefix.length).trim().split(/ +/)
  const cmdName = args.shift().toLowerCase()

  const command = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
  if(!command) return;

  try {

    command.execute(message, client, args)

  } catch(err) {

    console.error(err)

  }

})


client.login(process.env.DISCORD_TOKEN || 'Tu Token')