const Matching = require ('./matching')

class Expert{
    constructor(name, jobDescription){
    this.name = name
    this.jobDescription = jobDescription
    this.matchings = []
    }


  match(client, jobDescription) {
    const matching = new Matching(client, this, jobDescription)
    
    if (client.demand == this.jobDescription) {
    this.matchings.push(matching); 
    console.log(`${this.name} and ${client.name} has matched`)
    console.log(`${this.name} has ${this.matchings.length} matching.`)
    console.log(`${client.name} has ${this.matchings.length} matching.`)
    
    }
  }
}

module.exports = Expert