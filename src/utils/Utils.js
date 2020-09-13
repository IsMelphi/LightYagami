module.exports = {
    clean: function clean(text) {
        if (typeof text === 'string')
        return text
        .replace(/`/g, '`' + String.fromCharCode(8203))
        .replace(/@/g, '@' + String.fromCharCode(8203))
        else return text
                
        },
    hora: function Hora() {
        fecha = new Date()
        hora = fecha.getHours()
        minutos = fecha.getMinutes() 
        if(hora < 10) {
        hora = `0${hora}`
        }
        if(minutos < 10) {
        minutos = `0${minutos}`
        }
       
        return `${hora}:${minutos}`
    }
}