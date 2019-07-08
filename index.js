const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-adapter-node-websql'));

console.log('pouchdb sample start.');

var db = new PouchDB('databases/sampledb', {adapter: 'websql'});
db.info().then((info) => {
    console.log(info);
})

console.log('pouchdb sample end.');