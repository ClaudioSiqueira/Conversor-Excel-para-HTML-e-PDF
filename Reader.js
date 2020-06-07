const fs = require('fs')
const util = require('util')


class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile) // recebe um callback e retorna uma promise
    }

    async Read(filepath){
        try{
            return await this.reader(filepath,"utf8") // espera ler o arquivo, e dps retorna
        }catch(err){
            return undefined
        }
        
    }
}

module.exports = Reader