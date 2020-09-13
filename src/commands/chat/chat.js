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

    if(client.chat.get(message.guild.id).map(mensaje => mensaje.mensaje).join(' ').length > 2000) {
        client.chat.delete(message.guild.id)
        return message.channel.send(new Discord.MessageEmbed().setDescription('Chat Reseteado.'))
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor('Light Chat', client.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }))
    .setDescription(`\`\`\`ini\n${chat.map(x => `[${x.hora}][${x.autor}] ${x.mensaje}`).reverse().slice(0, 10).join('\n')}\n\`\`\``)
    .setImage('https://cdn.discordapp.com/attachments/752340829103849632/754742554540638228/pngegg.png')
    .setColor('FFD788')
    message.channel.send(embed)

    }
}