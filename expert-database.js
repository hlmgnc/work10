const BaseDatabase = require ('./base-database')
const Expert = require ('../expert')

class ExpertDatabase extends BaseDatabase {
    
      findByExpert(name) {
        return this.findByExpert('name', name)
      }
    
      findByJobDescription(jobDescription) {
        return this.findBy('jobDescription', jobDescription)
      }


}
module.exports = new ExpertDatabase(Expert)