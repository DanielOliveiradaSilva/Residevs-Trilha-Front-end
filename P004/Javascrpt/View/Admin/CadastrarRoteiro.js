
const buttonCadastrar = document.querySelector(".Cadastrar");

let roteiros =  [];
let app = new App();

buttonCadastrar.addEventListener("click",Cadastrar);
document.addEventListener('DOMContentLoaded', carregarView); 
function Cadastrar() {
   
    const inputCartaoPostal = document.querySelector("#CartaoPostal");
    const inputCidade = document.querySelector("#Destino");
    const inputDiarias = document.querySelector("#Diarias");
    const inputValor = document.querySelector("#Valor");
    let novoRoteiro = new Roteiro(inputCartaoPostal.value, inputCidade.value, inputDiarias.value, inputValor.value);
    app.AdicionarRoteiro(novoRoteiro);
    carregarView();
}

function carregarView() {
    const listadeRoteiros = document.querySelector(".lista-de-roteiros");
    roteiros = app.GetRoteiros();
    console.log(roteiros)
    let novoItem = ` 
    <caption >Dados do Formulário</caption>
        <tr>
            <th>Imagem</th>
            <th>Destino</th>
            <th>Diarias</th>
            <th>Valor</th>
    </tr>`;
    
    roteiros.forEach(roteiro => {
        novoItem = novoItem + `
        <tr>
            <td>${roteiro.GetImg()}</td>
            <td>${roteiro.GetCidade()}</td>
            <td>${roteiro.GetDiarias()}</td>
            <td>${roteiro.GetValor()}</td>
        </tr>`;
    });
    listadeRoteiros.innerHTML = novoItem;

}