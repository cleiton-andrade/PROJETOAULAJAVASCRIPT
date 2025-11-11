import { converte } from "./Funcoes";

export function main(){

    try{

        const resultado = converte(123);
        console.log(resultado);

    }catch(error){ // capitura o possivél erro

     if(error instanceof TypeError){ // verifica o tipo do erro
        console.error("TyperError: " + error.message)

    }

        } finally {
            console.log("Sempre irei executar!")
        } 

}
main()
