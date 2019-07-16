 var loki = require ('lokijs')

var db = new loki('db.json')
var clientes = db.addCollection('clientes')

clientes.insert({
    nome:'fernando',
    email: 'fernandorosajr@gmail.com'
});

db.save()
