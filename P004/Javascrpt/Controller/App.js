class App{
    constructor(){
        this.roteiros = [];
        
        this.CarregarRoteiros(); // Carrega as roteiros salvas no armazenamento local no início

        // Você pode adicionar roteiros padrão caso não haja tarefas salvas
        if (this.roteiros.length === 0) {
            this.roteiros.push(new Roteiro('https://a.cdn-hotels.com/gdcs/production67/d1025/9c42e257-fce5-4600-97d1-c3f3c6afd86b.jpg', "Salvador", "5", "500"));
            this.roteiros.push(new Roteiro('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSnozsYD831FKV4At4DYkyiWcpCKdYin4ONa-MzS6xOx9sRn1uxJLW2PDFyfdlbciWNg&usqp=CAU', 'Rio de Janeiro', '10', '1499,99'));
            this.SalvarTarefas(); // Salva as roteiros iniciais após adicioná-las
        }
       
    }

    AdicionarRoteiro(roteiro){
        this.roteiros.push(roteiro);
        console.log("Adicionado");
        this.SalvarTarefas();
    }
    BuscarRoteiroPorCidade(cidade){
        return this.roteiros.find((roteiro) => roteiro.GetCidade() === cidade);
    }
    AlterarRoteiro(Roteiro){
        let index = this.BuscarRoteiroPorCidade(Roteiro.GetCidade());
        if(index !== -1){
            this.roteiros[index] = Roteiro;
            console.log("Roteiro alterado");
        }else{
            console.log("Não foi possivel alterar o roteiro");
        }
        this.SalvarTarefas();
    }
   

    GetRoteiros(){
        return this.roteiros;
    }
    CarregarRoteiros() {
        const roteirosSalvos = localStorage.getItem('roteiros'); // Corrigindo o nome da variável
        if (roteirosSalvos) {
            try {
                const roteirosConvertidos = JSON.parse(roteirosSalvos);
                this.roteiros = roteirosConvertidos.map(roteiro => {
                    return new Roteiro(roteiro.cartao_postal, roteiro.cidade, roteiro.diarias, roteiro.valor);
                });
                console.log('Roteiros carregados:', this.roteiros);
            } catch (error) {
                console.error('Erro ao carregar roteiros:', error);
            }
        }
    }
    SalvarTarefas() {
        localStorage.setItem('roteiros', JSON.stringify(this.roteiros));
    }

}