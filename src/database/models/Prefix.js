const mongoose = require('mongoose')

const Prefix = new mongoose.Schema({

    GuildID: String,
    Prefix: String

})

module.exports = mongoose.model('Prefix', Prefix)