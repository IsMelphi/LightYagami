module.exports = {
    name: 'meme',
    description: 'Memes Random de la Grasa pa nueba york',
    usage: 'meme',
    aliases: [],
    categoria: 'diversion',
    execute(message, client, args) {

    const meme = require('../../utils/meme').meme()
    message.channel.send({ files: [ meme ] })

    }
}