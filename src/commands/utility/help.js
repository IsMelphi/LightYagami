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
        .addField('Comandos de Información', '`help` `avatar` `snipe`')
        .addField('Comandos de Diversión', '`say`')
        .setColor('RANDOM')
       return message.channel.send(embed)
    }

try {

    const embed2 = new Discord.MessageEmbed()
    .addField('Nombre', client.commands.get(args[0]).name)
    .addField('Alias', client.commands.get(args[0]).aliases[0] ? client.commands.get(args[0]).aliases.join(' ') : 'No tiene alias.')
    .addField('Usage', client.commands.get(args[0]).usage)
    .addField('Categoria', client.commands.get(args[0]).categoria)
    message.channel.send(embed2)

} catch(err) {

    return message.channel.send('Ups... El comando Introducido no coincide con ningun comando, o lo escribio en Mayusculas.')

}

    

}
}
// Alg0                                                                                                                                                                                                                                                 