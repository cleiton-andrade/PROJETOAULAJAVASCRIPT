export class Transporte { //É A SUPER CLASSE, OU CLASSE MÃE

    //ATRIBUTO CAPACIDADE
    private _capacidade: number

    //METODO CONSTRUTOR
    constructor(capacidade: number) {
        this._capacidade = capacidade
    }

    //METODOS DE ACESSOS - GET E SET
    public get capacidade() {
        return this._capacidade
    }

    public set capacidade(novaCapacidade: number) {
        this._capacidade = novaCapacidade
    }

    //METODOS DE SUPORTE OU METODOS AUXILIARES
    public visualizar(): void {
        console.log("\n\n************************************************************");
        console.log("Dados do Meio de Transporte:");
        console.log("****************************************************************");
        console.log("Capacidade (número de passageiros): " + this.capacidade);
    }

}