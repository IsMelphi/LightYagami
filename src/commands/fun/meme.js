module.exports = {
    name: 'meme',
    description: 'Memes Random',
    usage: 'meme',
    aliases: [],
    categoria: 'Diversión',
    execute(message, client, args) {

    message.channel.send({ files: [ require('melphiworker').meme() ] })

    }
}