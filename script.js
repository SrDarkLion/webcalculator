function addCaracter(caracter) {
    const input = document.querySelector(".display").value
    document.querySelector(".display").value = input + caracter
}

function clearDisplay() {
    document.querySelector(".display").value = ""
}

function calculate() {
    const input = document.querySelector(".display").value

    document.querySelector(".display").value = eval(input)
}

function invert() {
    const input = document.querySelector(".display").value
    document.querySelector(".display").value = -input
}