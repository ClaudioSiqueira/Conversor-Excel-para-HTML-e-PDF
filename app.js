let Reader = require('./Reader')

let leitor = new Reader()


async function main(){
    let dados = await leitor.Read('./dados.csv') // espera a funcao concluir e coloca na variavel
    console.log(dados)
}

main()