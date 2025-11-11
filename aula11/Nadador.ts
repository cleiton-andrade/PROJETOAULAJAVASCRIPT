import { Atleta } from "./Atleta";

export class Nadador extends Atleta {

    constructor(nome: string) {
        super(nome)
    }

    // Implementação da método abstrato da classe mãe
    public aquecer(): void { // Implementação = Aplicação da lógica.
        console.log("Estou fazendo Polichinelo...")
    }

    // Esse método nadar é especifico/próprio da classe nadador.
    public nadar(): void {
        console.log("Estou nadando...")
    }

}