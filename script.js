let resultado = document.getElementById("resultado")
let currentInput = ""
let currentOperator = ""

function insert(data) {
    if (currentInput.length < 15){
        currentInput += data
        resultado.innerHTML = currentInput
    } else {
        currentInput += ""
        resultado.innerHTML = currentInput
    }
}

function insertOperator(operator) {
    if (currentInput === "" || operator == ".") return
    currentInput += operator
    resultado.innerHTML = currentInput
}

/* Botão de Calcular "=" */
function calcular() {
    try{
        resultado.innerHTML = math.evaluate(resultado.innerHTML)
    } catch {
        resultado.innerHTML = "Error"
    }
}

/* Botão de Apagar "C" */
function limpar() {
    currentInput = ""
    resultado.innerHTML = currentInput
}

/* Botão de Apagar "<" */
function apagar() {
    currentInput = currentInput.slice(0, -1)
    resultado.innerHTML = currentInput
}