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
    
    if(message.guild.premiumTier) {
        embed.addField('\<a:NitroNitroso:753722285621248010>Boost Estadisticas', `**Numero de Boost:** ${message.guild.premiumSubscriptionCount}\n**Nivel de Boost:** ${message.guild.premiumTier}`)
    }

    if(message.guild.features.length) { 
        embed.addField('Features', `\`\`\`\n${message.guild.features.map(x => Features[x]).join(', ')}\n\`\`\``)
    }

    embed.addField('Servidor', Flags[message.guild.region])
    .setImage( message.guild.splashURL( { size: 2048, dynamic: true, format: 'png' } ) || message.guild.iconURL( { size: 2048, dynamic: true, format: 'png' } ))
    .setColor('RANDOM')
    message.channel.send(embed)

    }
}