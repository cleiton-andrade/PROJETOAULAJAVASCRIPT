import { Conta } from "./Conta"

export function main(){

    // INSTANCIA DA CLASSE CONTA OU INSTANCIAMENTO DE UM OBJETO
    const conta1: Conta = new Conta(12156, 108, 1,  "Cleiton Matos Andrade", 10000000)

    console.log("Titular da Conta: " + conta1.titular)

    conta1.saldo = 15000000
    console.log("Saldo da conta: " + conta1.saldo)


}

main()