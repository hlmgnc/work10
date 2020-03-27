const Matching = require('./matching')
const uuid = require('uuid')

class Client{
    constructor(id = uuid.v4(), name, location, demand) {
    this.id = id
    this.name = name
    this.location = location
    this.demand = demand
    
    } 
    static create({id, name, location,demand}){
    const newClient = new Client(name,location)
    newClients.matchings = matchings
    
    return newClient
    }

}




module.exports = Client 