module.exports = {
    name: 'editsnipe',
    description: 'Ver mensajes editados',
    aliases: ['ens'],
    categoria: 'Información',
    usage: 'editsnipe | editsnipe <canal>',
    execute(message, client, args) {

    const Discord = require('discord.js')

    const channel = message.mentions.channels.first() || message.channel

    const editsnipe = client.editsnipes.get(channel.id)

    if(!editsnipe) return message.channel.send(new Discord.MessageEmbed().setDescription('No hay mensajes editados en este Canal.'))
    .then(m => m.delete( { timeout: 4000 } ))

    const embed = new Discord.MessageEmbed()
   .addField('\u200b', `> Mensaje Antes: **${editsnipe.mensaje_viejo}**\n> Mensaje Nuevo: **${editsnipe.mensaje_nuevo}**\n> Autor: **${editsnipe.autor}**\n> Canal: **${editsnipe.canal}**`)
   message.channel.send(embed)
    }
}