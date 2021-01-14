/*
    Usando algumas funções matemáticas.
    Gerador de números aleatórios de 0 a 100
*/
function generateNumber() {
    let res = Math.floor(Math.random() * 100);

    document.querySelector(".mathematic").innerHTML = res;
}