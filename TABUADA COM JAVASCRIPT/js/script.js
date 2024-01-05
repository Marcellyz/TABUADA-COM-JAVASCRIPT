// Seleção de elementos
let multiplicationForm = document.querySelector("#multiplication-form");
let numberInput = document.querySelector("#number");
let multiplicationInput = document.querySelector("#multiplication");
let multiplicationTable = document.querySelector("#multiplication-operations");
let multiplicationTitle = document.querySelector("#multiplication-title span")
// Funções

let createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 0; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class = "operation">${number} x ${i} = </div>
            <div class = "result"> ${result}<\div>
            <\div>`

        const parser = new DOMParser()

        const htmlTamplate = parser.parseFromString(template, "text/html");

        const row = htmlTamplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}
// Eventos
multiplicationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let multiplicationNumber = +numberInput.value;
    let multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});