const fs = require('fs')
const save = (filename,object) => {
fs.writeFileSync(`./${filename}.json`,JSON.stringify(objects))

}
const load = (filename) => {

}


module.exports = { save, load }



