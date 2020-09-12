module.exports = {
    name: 'chat',
    description: 'Chat de Light Yagami',
    aliases: [],
    usage: 'chat',
    categoria: 'Diversión',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const mensajes = client.chat.get(message.guild.id)

    function Hora() {
        fecha = new Date()
        hora = fecha.getHours()
        minutos = fecha.getMinutes() 
        if(hora < 10) {
        hora = `0${hora}`
        }
        if(minutos < 10) {
        minutos = `0${minutos}`
        }
       
        return `${hora}:${minutos}`
    }

    message.channel.send(`[${Hora()}][${mensajes.autor}]: ${mensajes.mensaje}`, { code: 'ini' })

    }
}