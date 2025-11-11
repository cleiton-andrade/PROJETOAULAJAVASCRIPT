//Declaração da função

export function somar (a: number, b: number): number {

    // Lógica da função

    let resultado: number = a + b // 2 + 2 => resultado = 4
    return resultado
}

// Chamada da função
export function logar (usuario: number | string): void { // | => Pipe / ||
    if(typeof (usuario) === "number") //typeof
    console.log("\nOVocê está acessando o Insta pelo Celular");
    else
        console.log("\nVocê está acessando o Insta pelo e-mail");
}

/*

= : atribuição
== : igualdde => 5 é igual a '5'
=== : identico => 5 é igual a '5' e eles tem o mesmo tipo?

*/

export function transformarNumeroEmETexto(valor: number): string {
    let texto: string

    if(valor ===5){
        texto = "Valor digitado é cinco"
    } else {
        texto = "Você digitou um número diferente de cinco"
    }
    return texto
}

