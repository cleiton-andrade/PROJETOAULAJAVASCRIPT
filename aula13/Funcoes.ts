import { ExcecaoSimples } from "./exceptions/ExcecaoSimples";

export function converte(conteudo: any): string{ // recebe -> conteudo // o parametro é -> any
    return conteudo.toUpperCase();
}

export function validarIdade(idade: number): void {

    if (idade < 18) {

        throw new Error("A Pessoa não está apta a dirigir!"); // throw new Error = Lance uma nova excessão da classe error.

    } else {

        console.log("A Pessoa está apta a dirigir!");

    }
}

    export function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        throw new ExcecaoSimples("Não existe divisão por zero!");

    return numero1 / numero2;
}