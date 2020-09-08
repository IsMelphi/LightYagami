module.exports = {
    name: 'help',
    description: 'Información de los Comandos.',
    aliases: [],
    usage: 'help <comando>',
    categoria: 'Información',
    execute(message, client, args) {

    const Discord = require('discord.js')

    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`!Hola ${message.member.displayName}! Mi nombre es Abismo, pero puedes llamarme como quieras. Yo soy un bot creado para entretenerte y ayudar a tu Server.\nPuedes ver toda la información de un comando con \`abyss!help <comando>\`\n\nTotal de Comandos: ${client.commands.size}`)
        .addField('Comandos de Información', '`help`')
        .setColor('RANDOM')
        message.channel.send(embed)
    }

    const cmd = args[0]

    const embed2 = new Discord.MessageEmbed()
    .addField('Nombre', client.commands.get(cmd).name)
    .addField('Alias', client.commands.get(cmd).aliases ? client.commands.get(cmd).aliases.join(' ') : 'No tiene alias.')
    .addField('Usage', client.commands.get(cmd).usage)
    .addField('Categoria', client.commands.get(cmd).categoria)
    message.channel.send(embed2)

}
}
// Alg0                                                                                                                                                                                                                                                 