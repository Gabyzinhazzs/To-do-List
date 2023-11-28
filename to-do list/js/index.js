const button = document.querySelector(".botao-adicionar")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")

let minhaLista = []


function adicionarnovaTarefa(){
    minhaLista.push({
        tarefa: input.value,
        concluida:false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''

    minhaLista.forEach((item, posicao) =>{
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
                    <img src="./css/img/checked.png" alt="check-concluido" onclick="concluirTarefa(${posicao})">
                    <p>${item.tarefa}</p>
                    <img src="./css/img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
                </li>`
    })
listaCompleta.innerHTML = novaLi

localStorage.setItem("lista", JSON.stringify(minhaLista))
}

function concluirTarefa(posicao){
    minhaLista[posicao].concluida = ! minhaLista[posicao].concluida
mostrarTarefas()
}

function deletarItem(posicao){
    minhaLista.splice(posicao, 1)

    mostrarTarefas()
}
function recarregarTarefas(){
    const tarefasdolocalStorage = localStorage.getItem("lista")
    
    if(tarefasdolocalStorage){

    minhaLista = JSON.parse( tarefasdolocalStorage)
    }

    mostrarTarefas()
}
recarregarTarefas()

button.addEventListener("click",adicionarnovaTarefa)