module.exports = {
    name: 'chat',
    description: 'Chat de Light Yagami',
    aliases: [],
    usage: 'chat',
    categoria: 'Chat',
    execute(message, client, args) {

    const Discord = require('discord.js')
    const chat = client.chat.get(message.guild.id)

    if(!chat) return message.channel.send(new Discord.MessageEmbed().setDescription('No hay mensajes en este Servidor.'))
    .then(m => m.delete( { timeout: 4000 } ))

    const embed = new Discord.MessageEmbed()
    .setAuthor('Light Chat', client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }))
    .setDescription(`\`\`\`ini\n${chat.map(x => `[${x.hora}][${x.autor}] ${x.mensaje}`).reverse().join('\n')}\n\`\`\``)
    .setColor('FFD788')
    message.channel.send(embed)

    }
}