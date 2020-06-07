const fs = require('fs')

class Reader{
    read(filepath){
        fs.readFile(filepath, 'utf8',(err, data) =>{
            if (err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    }
}

module.exports = Reader