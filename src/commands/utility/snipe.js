module.exports = {
    name: 'snipe',
    description: 'Ver mensajes eliminados',
    usage: 'snipe | snipe <canal>',
    aliases: [],
    categoria: 'Utilidad',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Channel =  message.mentions.channels.first() || message.channel
    const Snipe = client.snipes.get(Channel.id)
    if(!Snipe) return message.channel.send(new Discord.MessageEmbed().setDescription('No hay mensajes Eliminados en este Canal.'))
    .then(m => m.delete( { timeout: 4000 } ))

    const embed = new Discord.MessageEmbed()
    .setDescription(`> Hmm... Una Persona llamada **${Snipe.autor}**, elimino un mensaje en **${Snipe.canal}**.\n\n**Más Información** `)
    .addField('Autor', Snipe.autor, true)
    .addField('Mensaje', Snipe.mensaje ? false : 'Sin Mensaje.', true)
    .addField('Canal', Channel.toString(), true)
    .setColor('EA6959')
    .setFooter('Seguimos invegistigando sus Mensajes 🕵️')
    message.channel.send(embed)

    }
}