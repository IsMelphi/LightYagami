require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.commands = new Discord.Collection()

function getDirectorios() {
  return require('fs').readdirSync('./src/commands').filter(function subFolder(file) {
    return require('fs').statSync(`./src/commands/${file}`).isDirectory()
  })
}

const cmdFiles = require('fs').readdirSync('./src/commands').filter(file => file.endsWith('.js'))

for (const Folder of getDirectorios()) {
  const FolderFile = require('fs').readdirSync(`./src/commands/${Folder}`).filter(end => end.endsWith('.js'))
  for (const File of FolderFile) {
    cmdFiles.push([Folder, File])
  }
}

for (const file of cmdFiles) {
  let cmd;
  if(Array.isArray(file)) {
    cmd = require(`./src/commands/${file[0]}/${file[1]}`)
  } else {
    cmd = require(`./src/commands/${file}`)
  }
  client.commands.set(cmd.name, cmd)
  console.log(`Comando Listo: ${cmd.name}, Categoria: ${file[0]}`)
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