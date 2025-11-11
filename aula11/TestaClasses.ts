import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main(){
    

    // Objeto da classe nadador
    const nadador: Nadador = new Nadador("Cleiton Andrade")
    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    const ciclista: Ciclista = new Ciclista("Steve Jobs")
    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()
}

main()