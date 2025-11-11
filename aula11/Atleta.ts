//CLASSE ABSTRATA

export abstract class Atleta { // Vai ser a classe generalista para criarmos as outras classes

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

    // Métodos abstratos - apenas a assinatura do método
    public abstract aquecer(): void; // A gente só define o método quando fazer a importação em outro arquivo! Por exemplo: O nadador.
    
    // Métodos auxiliares
    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }
}