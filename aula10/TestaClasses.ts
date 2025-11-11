import { Terrestre } from "./Terrestre"

export function main() {

    //INSTANCIOU O OBJETO DA CLASSE TERRESTRE
    const bike: Terrestre = new Terrestre(2, 2, 20)

    console.log("A capacidade do meio de transporte é: " + bike.capacidade)

    console.log("A capacidade do meio de transporte é: " + bike.capacidade)

    bike.visualizar()

}

main()