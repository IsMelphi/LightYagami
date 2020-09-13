module.exports = {
    name: 'ping',
    description: 'Ver la latencia del Mensaje y de Light Yagami.',
    usage: 'ping',
    aliases: [],
    categoria: 'Utilidad',
    execute(message, client, args) {

    const Discord = require('discord.js')

    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`Envio de Mensaje: **${Math.floor(Date.now() - message.createdTimestamp)}**\nLight Yagami Ping: **${client.ws.ping}**`)
        .setColor('RANDOM')
    )

    }
}