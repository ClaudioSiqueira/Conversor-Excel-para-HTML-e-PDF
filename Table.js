class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }


    get RowCont(){ // o get transforma um metodo em um atributo
        // Campo virtual: com ele a quantidade de linhas e col esta sempre atualizada
        return this.rows.length
    }

    get ColCont(){
        return this.header.length
    }
}

module.exports = Table