let resultado = document.getElementById("resultado")
let currentInput = "0"
let currentOperator = ""

resultado.innerHTML = currentInput

function insert(data) {
    if (currentInput == "0") {
        currentInput = data
    }
    else if (currentInput.length < 15){
        currentInput += data
        resultado.innerHTML = currentInput
    } else {
        currentInput += ""
        resultado.innerHTML = currentInput
    }

    resultado.innerHTML = currentInput
}

function insertOperator(operator) {
    if (currentInput === "") return

    const sinal = currentInput.slice(-1)
    if ("-+*/".includes(sinal)) return

    currentInput += operator
    resultado.innerHTML = currentInput
}

/* Botão de Calcular "=" */
function calcular() {
    try{
        let conta = math.evaluate(currentInput)
        resultado.innerHTML = conta
        currentInput = conta
    } catch {
        resultado.innerHTML = "Error"
        currentInput = "0"
    }
}

/* Botão de Apagar "C" */
function limpar() {
    currentInput = "0"
    resultado.innerHTML = currentInput
}

/* Botão de Apagar "<" */
function apagar() {
    if (currentInput.length <= 1) {
        currentInput = "0"
    } else {
        currentInput = currentInput.slice(0, -1)
    }
    
    resultado.innerHTML = currentInput
}