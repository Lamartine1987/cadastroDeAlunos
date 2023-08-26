

function inicia(){
    document.getElementById("botao").addEventListener("click", adicionarElementos)
}

function adicionarElementos(){
    var lista = document.getElementById("listaElementos");
    var texto = document.getElementById("inputTexto");
    var li = document.createElement("li");
    li.textContent = texto.value;
    lista.appendChild(li);
    texto.value="";
    texto.focus();
}

window.addEventListener("load", inicia);










