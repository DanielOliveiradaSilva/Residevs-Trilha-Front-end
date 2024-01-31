let minhalistadetarefas = [];

buttom = document.querySelector(".button-add-task");
const lista = document.querySelector(".list-task");

buttom.addEventListener("click", function () {
    tarefa = getInput(); //chamando a função pegar input
    if (tarefa == "") { //verificando se o input ta vazio
        let mesagem = document.querySelector("#mensagem");
        mesagem.innerText = "Por favor, digite uma tarefa";
        
        return;
    }else{
        AdicionarTarefa(tarefa); //chamando a função
    }
})
function AdicionarTarefa(tarefa){
    minhalistadetarefas.push(tarefa);
    mostrarTarefa();
}


function mostrarTarefa(){

    let novatarefa =  '';

    minhalistadetarefas.forEach(function(tarefa){
        novatarefa = novatarefa + `
        <li class="task">
            <p><input type="checkbox">${tarefa}</p>
        </li>
        `
    })

    lista.innerHTML = tarefa;
    
}

function getInput() {
    tarefa = document.querySelector(".input-task").value;
    return tarefa;
}
