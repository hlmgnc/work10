
const Expert = require ('/expert')
const Client = require ('/client')
const Matching = require ('/matching')
const hilmi = new Expert('Hilmi','cook')
const armagan = new Client('Armagan','Berlin','cook')

hilmi.match(armagan, 'cook')

hilmi genc