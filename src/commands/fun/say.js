                    module.exports = {
    name: 'say',
    description: 'Repite tu texto',
    usage: 'say <texto>',
    aliases: [],
    categoria: 'Diversión',
    execute(message, client, args) {

    if(!args[0]) {
        return message.channel.send('Debes escribir un Mensaje.')
        .then(m => m.delete( { timeout: 4000 } ))
    }
    
    if(message.deletable) message.delete

    message.channel.send(args.join(' '), { disableMentions: 'all' })
}
}