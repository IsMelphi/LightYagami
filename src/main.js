require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

const ascii = require('ascii-table')
const table = new ascii().setHeading('Comando', 'Carpeta')

const MongoDB = require('./database/main')
const ModelPrefix = require('./database/models/Prefix')

client.commands = new Discord.Collection()
client.snipes = new Map()
client.editsnipes = new Map()
client.chat = new Map()

function getDirectorios() {
  return require('fs').readdirSync('./commands').filter(function subFolder(file) {
    return require('fs').statSync(`./commands/${file}`).isDirectory()
  })
}

const cmdFiles = require('fs').readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const Folder of getDirectorios()) {
  const FolderFile = require('fs').readdirSync(`./commands/${Folder}`).filter(end => end.endsWith('.js'))
  for (const File of FolderFile) {
    cmdFiles.push([Folder, File])
  }
}

for (const file of cmdFiles) {
  let cmd;
  if(Array.isArray(file)) {
    cmd = require(`./commands/${file[0]}/${file[1]}`)
  } else {
    cmd = require(`./commands/${file}`)
  }
  client.commands.set(cmd.name, cmd)
  table.addRow(cmd.name, file[0])
  console.log(table.toString())
} 

client.on('ready', () => {

  console.log(`Bot Ready 😎, ${client.user.tag} Tiene un eseso de fasha en mas de ${client.guilds.cache.size} servers. 😎`)
  MongoDB.then(() => console.log('§bConectado a MongoDB')).catch(err => {
    console.error(err)
  })

})

client.on('messageDelete', (message) => {

  if(message.author.bot) return;

  client.snipes.set(message.channel.id, {
    mensaje: message.content,
    autor: message.author.tag,
    canal: message.channel.name
  })

})

client.on('messageUpdate', async (oldMessage, newMessage) => {

  if(oldMessage.author.bot) return;
  if(newMessage.author.bot) return;

  client.editsnipes.set(newMessage.channel.id, {
    mensaje_nuevo: newMessage.content,
    mensaje_viejo: oldMessage.content,
    autor: newMessage.author.tag,
    canal: newMessage.channel.name
  })

})

client.on('guildDelete', async (guild) => {
  await ModelPrefix.deleteOne({ GuildID: guild.id })
  console.log('Prefix Eliminado.')
})

client.on('message', async (message) => {

  if(message.author.bot) return;

  const PrePrefix = await ModelPrefix.findOne({ GuildID: message.guild.id }).exec()
  const Prefix = PrePrefix ? PrePrefix.Prefix : 'lg!'

  if(message.content.match(`^<@!?${client.user.id}>( |)$`)) {
    return message.channel.send(new Discord.MessageEmbed().setDescription(`Mi Prefix en este server es **${Prefix}**`).setColor('RANDOM'))
  }

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