module.exports = {
    name: 'mute',
    description: 'Silenciar a un Usuario de tu Servidor.',
    usage: 'mute <usuario>',
    categoria: 'Moderación',
    aliases: [],
    async execute(message, client, args) {

    const Discord = require('discord.js')

    if(!message.member.hasPermissions('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription('No tienes permisos suficientes para usar este Comando.'))
    if(!message.guild.me.hasPermissions('MANAGE_ROLES')) return message.channel.send(new Discord.MessageEmbed().setDescription('No tengo permisos para crear Roles o agregar Roles'))

    const User = message.mentions.members.first() 
    if(!User) return message.channel.send(new Discord.MessageEmbed().setDescription('Debes Mencionar a un Usuario.'))

    const Rol = message.guild.roles.cache.find(role => role.name == 'LightYagami-Muted')
    if(!Rol) {
        await message.guild.roles.create({ data: { name: 'LightYagami-Muted' } })
        message.guild.channels.cache.forEach(role => role.updateOverwrite(Rol, { SEND_MESSAGES: false }))
    }

    User.roles.add(Rol.id)

    message.channel.send(new Discord.MessageEmbed().setDescription(`${User.user.tag} fue Muteado.`))

    }
}