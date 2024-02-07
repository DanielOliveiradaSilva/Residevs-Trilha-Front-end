
class Roteiro{
    constructor(img, cidade,diarias, valor){
        this.cartao_postal = img;
        this.cidade = cidade;
        this.diarias = diarias;
        this.valor = valor;
    };

    GetImg(){
        return this.cartao_postal;
    }
    SetCidade(novaCidade){
        this.cidade = novaCidade;
    }
    GetCidade(){
        return this.cidade;
    }
    GetDiarias(){
        return this.diarias;
    }
    SetDiaria(NovasDiarias){
        this.diarias = NovasDiarias;
    }

    GetValor(){
        return this.valor;
    }
    SetValor(novoValor){
        this.valor = novoValor;
    }

}