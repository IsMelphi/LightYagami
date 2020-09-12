module.exports = {
    name: 'help',
    description: 'Información de los Comandos.',
    aliases: ['ayuda'],
    usage: 'help <comando>',
    categoria: 'Utilidad',
    async execute(message, client, args) {

    const Discord = require('discord.js')
    const ModelPrefix = require('../../database/models/Prefix')
    const PrePrefix = await ModelPrefix.findOne({ GuildID: message.guild.id }).exec()
    const Prefix = PrePrefix ? PrePrefix.Prefix : 'lg!'

    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`!Hola ${message.member.displayName}! Mi nombre es Light Yagami, pero puedes llamarme como quieras. Yo soy un bot creado para entretenerte y ayudar a tu Server.\nPuedes ver toda la información de un comando con \`${Prefix}help <comando>\`\n\nTotal de Comandos: ${client.commands.size}`)
        .addField('Comandos de Información', '`help` `avatar` `snipe` `editsnipe` `serverinfo`')
        .addField('Comandos de Diversión', '`say` `meme`')
        .addField('Comandos de Configuración', '`setprefix`')
        .setColor('RANDOM')
       return message.channel.send(embed)
    }

try {

    const embed2 = new Discord.MessageEmbed()
    .addField('Nombre', client.commands.get(args[0]).name)
    .addField('Alias', client.commands.get(args[0]).aliases[0] ? client.commands.get(args[0]).aliases.join(' ') : 'No tiene alias.')
    .addField('Usage', client.commands.get(args[0]).usage)
    .addField('Categoria', client.commands.get(args[0]).categoria)
    .setColor('RANDOM')
    message.channel.send(embed2)

} catch(err) {

    return message.channel.send('Ups... El comando Introducido no coincide con ningun comando, o lo escribio en Mayusculas.')

}

    

}
}
// Alg0                                                                                                                                                                                                                                                 