const fs = require('fs')
const flatted = require('flatted')


class BaseDatabase {
    constructor(model){
        this.model = model
        this.filename = model.constructor.name
    }
    save(objects){
      fs.writeFileSync(`./${this.filename}.json`,flatted.stringify(objects,null ,3))
    }
    load() {
        const file = fs.readFileSync(`./${this.filename}.json`, 'utf8')
        const objects = flatted.parse(file)

        return objects.map(this.model.create)
    }
    insert(object) {
        const objects = this.load()
        this.save (objects.concat(object))
    
    }
    remove(index) {    
        const objects = this.load()
    
        objects.splice(index, 1)
        this.save(objects)
      }
    update (object){

        const objects = this.load()
        const index = objects.findIndex(o => o.id == object.id)
    
        objects.splice()
        this.save(objects)
    }
}
module.exports = BaseDatabase