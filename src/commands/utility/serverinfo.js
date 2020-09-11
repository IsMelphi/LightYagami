module.exports = {
    name: 'serverinfo',
    description: 'Información del Servidor',
    usage: 'serverinfo',
    aliases: [],
    categoria: 'Información',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const { Flags, Features }  = require('../../utils/Flags')

    const embed = new Discord.MessageEmbed()
    .addField('Creador', `**Tag:** ${message.guild.owner.user.username}\n**ID:** ${message.guild.owner.user.id}`)
    .addField('\<a:NitroNitroso:753722285621248010>Boost Estadisticas', `**Numero de Boost:** ${message.guild.premiumSubscriptionCount}\n**Nivel de Boost:** ${message.guild.premiumTier}`)

    if(message.guild.features) {
        embed.addField('Features', `\`\`\`\n${message.guild.features ? message.guild.features.map(x => Features[x]).join(', ') : 'No tiene'}\n\`\`\``)
    }

    embed.addField('Servidor', Flags[message.guild.region])
    .setColor('RANDOM')
    message.channel.send(embed)

    }
}