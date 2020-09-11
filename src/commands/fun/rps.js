module.exports = {
    name: 'rps',
    description: 'Juega al Piedra, Papel y Tijera',
    usage: 'rps < Papel | Tijera | Piedra >',
    categoria: 'Diversión',
    aliases: [],
    execute(message, client, args) {

    const Discord = require('discord.js')

    const user =  message.mentions.users.first() || client.users.resolve(args[0])
    if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription('Debes mencionar a un Usuario.'))


    const collector = message.channel.createMessageCollector(m => m.content && m.author.id === user.id)

    collector.on('collect', async (message) => {
    
        if(message.content.toLowerCase().startsWith('no')) {
            message.channel.send('Rechazado')
            collector.stop()

        } else if(message.content.toLowerCase().startsWith('si')) {
            message.channel.send('Aceptado')
        }

        message.channel.send('Que Empieze el Juego')

        if(['paper','rock','scizor','piedra','papel','tijera'].includes(args[1])) return message.channel.send(new Discord.MessageEmbed().setDescription('Debes Jugar de la siguiente forma: `< Piedra | Papel | Tijera >`'))
    
    })

    }
}