let Reader = require('./Reader')
let Processor = require('./Processor')

let leitor = new Reader()


async function main(){
    let dados = await leitor.Read('./dados.csv') // espera a funcao concluir e coloca na variavel
    let dadosProcessados = Processor.Process(dados)
}


main()