module.exports = {
    name: 'checkinvite',
    aliases: ['ci'],
    description: 'Ver usuarios con Invitaciones',
    usage: 'checkinvite',
    execute(message, client, args) {

    const Discord = require('discord.js')

    const User_Status = message.guild.members.cache.filter(x => x.presence.activities.find(x => x.type === 'CUSTOM_STATUS') && x.presence.activities.find(x => x.type === 'CUSTOM_STATUS').state && x.presence.activities.find(x => x.type === 'CUSTOM_STATUS').state.includes('https://discord.gg')).map(x => x.displayName)
    if(!User_Status.length) {
        return message.channel.send(new Discord.MessageEmbed().setDescription('No hay usuarios con Invitaciones').setColor('RANDOM'))
    }

    const embed = new Discord.MessageEmbed()
    .setTitle('Usuarios con Invitaciones')
    .setDescription(User_Status.join(', '))
    .setColor('RANDOM')
    message.channel.send(embed)

    }
}