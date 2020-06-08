let Reader = require('./Reader')
let Processor = require('./Processor')
let Table = require('./Table')
let HtmlParser = require('./htmlParser')

let leitor = new Reader()


async function main(){
    let dados = await leitor.Read('./dados.csv') // espera a funcao concluir e coloca na variavel
    let dadosProcessados = Processor.Process(dados)
    
    var usuarios = new Table(dadosProcessados)
    let html = await HtmlParser.Parse(usuarios)
    console.log(html)

}


main()