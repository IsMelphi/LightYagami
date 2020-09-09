module.exports = {
    name: 'avatar',
    description: 'Muestra el avatar de un Usuario',
    aliases: [],
    usage: 'avatar <usuario> | avatar',
    categoria: 'Información',
    execute(message, client, args) {

    const Discord = require('discord.js')
    
    const user = client.users.resolve(args[0]) || message.mentions.users.first() || message.author

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Avatar de ${user.tag}`)
    .setDescription(`[Avatar Link](${user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' })})`)
    .setImage(user.displayAvatarURL({ size: 2048, dynamic: true, format: 'png' }))
    .setColor('RANDOM')
    message.channel.send(embed)
    }
}