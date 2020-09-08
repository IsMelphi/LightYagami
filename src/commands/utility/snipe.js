module.exports = {
    name: 'snipe',
    description: 'Ver mensajes eliminados',
    usage: 'snipe | snipe <canal>',
    aliases: [],
    categoria: 'Información',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Channel = message.channel || message.mentions.channels.first()
    const Snipe = client.snipes.get(Channel.id)
    if(!Snipe) return message.channel.send('No hay mensajes eliminados recientemente.')

    const embed = new Discord.MessageEmbed()
    .addField('Autor', Snipe.autor)
    .addField('Mensaje', Snipe.mensaje)
    .setColor('RANDOM')
    message.channel.send(embed)

    }
}