module.exports = {
    name: 'send',
    description: 'Mandar mensajes al Chat de Light Yagami',
    aliases: [],
    usage: 'send <mensaje>',
    categoria: 'Diversión',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Hora = require('../../utils/Utils').hora()

    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('Que mensajes enviaras?'))
    .then(m => m.delete( { timeout: 4000 } ))

    if(!client.chat.has(message.guild.id)) client.chat.set(message.guild.id, [])
    client.chat.get(message.guild.id).push({autor: message.author.tag, mensaje: args.join(' '), hora: Hora})

    message.channel.send(new Discord.MessageEmbed().setDescription('Mensaje Enviado').setColor('FA8859'))

    }
}