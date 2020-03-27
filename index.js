//const db = require ('./database')
//const Expert = require ('./expert')
//const Client = require ('./client')
const Matching = require ('./matching')
//const clientDatabase = require ('./client-database')
//const expertDatabase = require ('./expert-database')
const {clientDatabase,expertDatabase} = require ('./database')

const hilmi = expertDatabase.findByExpert('name', 'Hilmi')
const armagan = passengerDatabase.findByName('Armagan')
const aykut = new Client (undefined,'Aykut','Frankfurt', 'driver')
const dogu = new Expert(undefined,'Dogu','driver')
hilmi.match(armagan, 'cook')

//db.save('clients', [{name: 'Armagan ', location: ' Berlin', demand : 'cook'}])
//db.save('experts', [hilmi] )
//db.insert('clients', aykut)
//db.remove('clients',2)


const armagan2 = clientDatabase.findByName('client','armagan')
armagan2.match ('hilmi', 'berlin', 'cook')

clientDatabase.update(armagan)

//Client.forEach(c => console.log (c.name))

const client = db.load('clients')
