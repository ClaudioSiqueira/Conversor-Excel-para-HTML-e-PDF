let Reader = require('./Reader')
let Processor = require('./Processor')
let Table = require('./Table')

let leitor = new Reader()


async function main(){
    let dados = await leitor.Read('./dados.csv') // espera a funcao concluir e coloca na variavel
    let dadosProcessados = Processor.Process(dados)
    
    var usuarios = new Table(dadosProcessados)
    console.log(usuarios.RowCont)
    console.log(usuarios.ColCont)

}


main()