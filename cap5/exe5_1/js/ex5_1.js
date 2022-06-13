var pacientes = []; //declara vetor global

function adicionarPaciente() {
        //cria referencia aos elementos de entrada e saída de dados da página
        var inPaciente = document.getElementById("inPaciente");
        var outLista = document.getElementById("outLista");
        var nome = inPaciente.value;    //obtém nome do paciente

    // verifica preenchimento do nome do paciente para
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);

    var lista = ""; //string para concatenar pacientes

    //percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
      
    }

    //altera o conteúdo da tag outLista
    outLista.textContent = lista;

    //limpa campo e posiciona cursor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
    
}

//cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function urgenciaPaciente() {
        //entrada e saída do elemento urgência
        var inPaciente = document.getElementById("inPaciente");
        var outLista = document.getElementById("outLista");

        var nome = inPaciente.value; 

    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    pacientes.unshift(nome); //adiciona o nome no início do vetor
    
    var lista = "";

    //percorre os elementos
    for (i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
    outLista.textContent = lista;
    
    inPaciente.focus();
    inPaciente.value = "";

}
// referencia ao btUrgencia a função clicar
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", urgenciaPaciente);


function atenderPaciente() {
    // verificar se vetor pacientes está cheio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }
    //cria referência aos elementos de saída de dados
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    // remove paciente do início da fila (e obtém nome)
    var atender = pacientes.shift();

    //exibe nome do paciente em Atendimento
    outAtendimento.textContent = atender;

    //string para concatenar pacientes
    var lista = "";

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    //altera o conteúdo da tag outLista para
    outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
