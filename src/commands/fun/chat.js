module.exports = {
    name: 'chat',
    description: 'Chat de Light Yagami',
    aliases: [],
    usage: 'chat',
    categoria: 'Diversión',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const chat = client.chat.get(message.guild.id)

    if(!chat) return message.channel.send(new Discord.MessageEmbed().setDescription('No hay mensajes en este Servidor.'))
    
    const mensaje = chat.map(mensaje => mensaje.mensaje).reverse().join('\n')
    const autor = chat.map(autor => autor.autor).reverse().join('\n')
    const hora = chat.map(hora => hora.hora).reverse().join('\n')

    message.channel.send(`[${hora}][${autor}]: ${mensaje}`, { code: 'ini' })

    }
}