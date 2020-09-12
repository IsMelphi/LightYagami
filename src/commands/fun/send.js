module.exports = {
    name: 'send',
    description: 'Mandar mensajes al Chat de Light Yagami',
    aliases: [],
    usage: 'send <mensaje>',
    categoria: 'Diversión',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Objeto = { autor: message.author.tag, mensaje: args.join(' ') }

    client.chat.set(message.guild.id, Objeto)

    message.channel.send(new Discord.MessageEmbed().setDescription('Mensaje Enviado'))

    }
}