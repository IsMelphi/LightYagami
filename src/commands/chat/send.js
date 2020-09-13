module.exports = {
    name: 'send',
    description: 'Mandar mensajes al Chat de Light Yagami',
    aliases: [],
    usage: 'send <mensaje>',
    categoria: 'Chat',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Hora = require('../../utils/Utils').hora()

    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('¿Que mensajes enviaras?'))
    .then(m => m.delete( { timeout: 4000 } ))

    if(['discord.gg', 'https://discord.gg/'].some(link => message.content.toLowerCase().includes(link))) {
        if(message.deletable) message.delete()
        return message.channel.send(new Discord.MessageEmbed().setDescription('¿Piensas hacer spam en mi Chat? XD').setColor('RANDOM'))
    }

    if(['```', '`'].some(bug => message.content.toLowerCase().includes(bug))) {
        return message.channel.send(new Discord.MessageEmbed().setDescription('¿Crees bugear mi Chat? xd').setColor('RANDOM'))
    }

    if(!client.chat.has(message.guild.id)) client.chat.set(message.guild.id, [])
    client.chat.get(message.guild.id).push({autor: message.author.tag, mensaje: args.join(' '), hora: Hora})

    if(message.deletable) message.delete()

    message.channel.send(new Discord.MessageEmbed().setDescription('Mensaje Enviado').setColor('FA8859'))

    }
}