// CHAMADA DAS FUNÇÕES

import { logar, somar, transformarNumeroEmETexto } from "./Exemplo1"

let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = "cleiton@generation.com" // (1)



console.log("O resultado de sua adição é: " + valor)
console.log("O resultado de sua adição é: " + valor1)


// logar("cleiton@generation.com")

logar(login) // (1)

let numeroEmTexto: string = transformarNumeroEmETexto(6)
console.log(numeroEmTexto)