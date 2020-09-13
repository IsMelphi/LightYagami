module.exports = {
    name: 'chat',
    description: 'Chat de Light Yagami',
    aliases: [],
    usage: 'chat',
    categoria: 'Diversión',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const mensajes = client.chat.get(message.guild.id)
    const Hora = require('../../utils/Utils').hora()

    if(!mensajes) return message.channel.send(new Discord.MessageEmbed().setDescription('No hay mensajes en este Servidor.'))

    message.channel.send(`[${Hora}][${mensajes.autor}]: ${mensajes.mensaje}`, { code: 'ini' })

    }
}