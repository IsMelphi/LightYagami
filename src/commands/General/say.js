module.exports = {
    name: 'say',
    description: 'Repitir tu Texto',
    usage: 'say <texto>',
    aliases: ['decir'],
    categoria: 'General',
    execute(message, client, args) {

    if(!args[0]) {
        return message.channel.send('Debes escribir un Mensaje.')
        .then(m => m.delete( { timeout: 4000 } ))
    }
    
    if(message.deletable) message.delete

    message.channel.send(args.join(' '), { disableMentions: 'all' })
}
}