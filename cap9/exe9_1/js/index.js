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
   var h5 = document.getElementsByTagName("h5");
   var numH5 = h5.length;

   if (numH5 == 0) {
      alert("Não há tarefas para selecionar");
      return;
   }

   var aux = -1;

   //percorre a lista de elementos h5 inseridos na página
   for (var i = 0; i < numH5; i++) {
      if (h5[i].className == "tarefaSelecionada") {
         h5[i].className = "tarefaNormal";
         aux = i;
         break;
      }
   }
   //se a linha que está selecionada é a ultima, irá voltar para a primeira
   if (aux == numH5 - 1) {
      aux = -1;
   }

   h5[aux + 1].className = "tarefaSelecionada"; // muda o estilo da próxima tag h5

}

var btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada() {
   //criar referencia ao elemento que irá perder um filho
   var divQuadro = document.getElementById("divQuadro");
   var h5 = document.getElementsByTagName("h5"); //obtém tags h5 da página
   var numH5 = h5.length;                          //obtém quantidade de h5

   var aux = -1; //variárel auxiliar para indicar linha selecionada

   //percorre a lista de elementos h5 inseridos na página
   for (let i = 0; i < numH5; i++) {
      // verifica className da tag h5   
      if (h5[i].className == "tarefaSelecionada") {
         aux = i;
         break;
      }
   }

   //se não há tarefa selecionada (ou se lista vazia.. )
   if (aux == -1) {
      alert("Selecione uma tarefa para removê-la");
      return;
   }

   //solicita confirmação (exibindo o conteúdo da tag h5 selecionada )
   if(confirm("confirma Exclusão de '" + h5[aux].textContent +"'?")){
      divQuadro.removeChild(h5[aux]); //remove um dos filhos de divQuadro
   }
}

var btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefas () {
   var h5 = document.getElementsByTagName("h5");
   var numH5 = h5.length;

   if (numH5 == 0){
      alert("Não há terefas a serem salvas");
      return;
   }
   var tarefas = ""; // irá acumular as tarefas

   //percorre a lista de elementos h5 inseridos na página	
   for(var i = 0; i < numH5; i++){
      tarefas += h5[i].textContent + ";";
   }

   //grava tarefas em localstorage, removendo o último ";"
   localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length -1));
   //confere se dados foram armazenados em localStorage
   if(localStorage.getItem("tarefasDia")){
      alert("Ok, Tarefas Salvas");
   }
}
var btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravarTarefas);

function recuperarTarefasSalvas (){
   if(localStorage.getItem("tarefasDia")){
      var tarefas = localStorage.getItem("tarefasDia").split(";");

      var divQuadro = document.getElementById("divQuadro");
   
      for (var i = 0; i < tarefas.length; i++){
         var h5 = document.createElement("h5");
         var texto = document.createTextNode(tarefas[i]);
         h5.appendChild(texto);
         divQuadro.appendChild(h5);

      }
   }
}
recuperarTarefasSalvas()