

document.addEventListener('DOMContentLoaded', CarregarView); 
let app = new App();
let listaDeRoteiros = []

function CarregarView() {
    listaDeRoteiros = app. GetRoteiros();

    const listarRoteiros = document.querySelector(".container-destinos");

    let novaDiv = '';

    listaDeRoteiros.forEach(roteiro => {
        novaDiv = novaDiv + `
        <div class="roteiros-viagens">
            <img src="${roteiro.GetImg()}" alt ="${roteiro.GetCidade()}">
            <div class="roteiro-destino">${roteiro.GetCidade()}</div>
                <ul class="roteiro-incluso">
                    <li>Áereo ida e volta</li>
                    <li>${roteiro.GetDiarias()} diárias</li>
                    <li>Café da Manhã</li>
                </ul>
            <div class="roteiro-preco">R$ ${roteiro.GetValor()}</div>
            <div class="roteiro-obs">Taxas Inclusas</div>
            <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
            <button class="roteiro-comprar">Comprar</button>
        </div>
        `
    });
   
    listarRoteiros.innerHTML = novaDiv;
    
}