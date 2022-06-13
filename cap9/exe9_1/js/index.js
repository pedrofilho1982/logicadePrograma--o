function adicionarTarefa() {
    var inTarefa = document.getElementById("inTarefa");
   
    var tarefa = inTarefa.value;
 
    // se não exite um nome de
    if (tarefa == "") {
       alert("Informe a tarefa");
       inTarefa.focus();
       return;                       //retorna
    }
    
    //cria referencia ao elemento divQuadro (local onde tag h5 será inserida)
    var divQuadro = document.getElementById("divQuadro");
    var h5 = document.createElement("h5");
    var texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);
 
    inTarefa.value = "";
    inTarefa.focus();
}
  
 var btAdicionar = document.getElementById("btAdicionar");
 btAdicionar.addEventListener("click", adicionarTarefa);

 function selecionarTarefa() {
    var h5 = document.createElementByTagName("h5");
    var numH5 = h5.length;

    if (numH5 == 0) {
       alert("Não há tarefas para selecionar");
       return;
    }
 }