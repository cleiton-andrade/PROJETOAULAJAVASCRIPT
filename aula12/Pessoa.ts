//CLASSE ABSTRATA

export abstract class Pessoa { // Vai ser a classe generalista para criarmos as outras classes

    private _nome: string; // Nome

    constructor (nome: string){ // Método contrutor que toda classe precisa ter
        this._nome = nome;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }
      
    // Métodos auxiliares
    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }
}

