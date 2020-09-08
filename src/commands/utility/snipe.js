module.exports = {
    name: 'snipe',
    description: 'Ver mensajes eliminados',
    usage: 'snipe | snipe <canal>',
    aliases: [],
    categoria: 'Información',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const Channel =  message.mentions.channels.first() || message.channel
    const Snipe = client.snipes.get(Channel.id)
    if(!Snipe) return message.channel.send('No hay mensajes eliminados recientemente.')

    const embed = new Discord.MessageEmbed()
    .setDescription(`Hmm... Una Persona llamada ${Snipe.autor}, elimino un mensaje en ${Snipe.canal}.`)
    .addField('Autor', Snipe.autor)
    .addField('Mensaje', Snipe.mensaje)
    .setColor('EA6959')
    message.channel.send(embed)

    }
}