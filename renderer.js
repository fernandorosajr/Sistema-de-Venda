 var loki = require ('./node_modules/lokijs')
// import loki from 'lokijs/build/lokijs.min.js';
// imported.src = 'lokijs/build/lokijs.min.js';

var db = new loki('db.json')
var clientes = db.addCollection('clientes')

clientes.insert({
    nome:'fernando',
    email: 'fernandorosajr@gmail.com'
});

db.save()
