module.exports = {
    name: 'serverinfo',
    description: 'Información del Servidor',
    usage: 'serverinfo',
    aliases: ['sv'],
    categoria: 'Utilidad',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const { Flags, Features, Notificaciones, Verificacion }  = require('../../utils/Flags')

    const embed = new Discord.MessageEmbed()
    .addField('Creador', `**Tag:** ${message.guild.owner.user.username}\n**ID:** ${message.guild.owner.user.id}`)
    
    if(message.guild.premiumTier) {
        embed.addField('\<a:NitroNitroso:753722285621248010>Boost Estadisticas', `**Numero de Boost:** ${message.guild.premiumSubscriptionCount} Miembros\n**Nivel de Boost:** ${message.guild.premiumTier}`)
    }

    if(message.guild.features.length) { 
        embed.addField('Features', `\`\`\`\n${message.guild.features.map(x => Features[x]).join(', ')}\n\`\`\``)
    }

    embed.addField('Servidor', `Notificaciones: **${Notificaciones[message.guild.defaultMessageNotifications]}**\nCreado el: **${Intl.DateTimeFormat({ dateStyle: "short" }).format(message.guild.createdAt)}**\nVerificación: **${Verificacion[message.guild.verificationLevel]}**\nRegión: **${Flags[message.guild.region]}**`)
    .addField('Estadisticas del Servidor', `Canales: **${message.guild.channels.cache.size}**\nMiembros: **${message.guild.memberCount}**\nEmojis: **${message.guild.emojis.cache.size}**\nRoles: **${message.guild.roles.cache.size}**`)
    .setImage( message.guild.bannerURL( { size: 2048, dynamic: true, format: 'png' } ) || message.guild.splashURL( { size: 2048, dynamic: true, format: 'png' } ) || message.guild.iconURL( { size: 2048, dynamic: true, format: 'png' } ))
    .setColor('RANDOM')
    message.channel.send(embed)

    }
}