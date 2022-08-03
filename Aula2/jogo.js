

// CONST PAR = "par" fica mais simples de gravar quando nomeamos a variavel com o proprio uso dela.
//min = 1
//max = 10
//Math.random() ele sorteia de forma aleatoria o numero que quero
//ParseInt() transforma o numero em inteiro

let numeroSorteado = parseInt(Math.random() * 10 ) + 1

console.log(numeroSorteado)

let lado = prompt("Escolha seu lado: \n Par ou Impar")

while(lado != PAR && lado !== IMPAR){
    alert("Escolha seu lado: \n Par ou Impar")
    console.log("digite novamente")

}


if (lado === PAR){
    console.log("Escolheu par")
}
else if (lado === IMPAR){
    console.log("Escolheu impar")
}

else {
    console.log("digite novamente")
}

console.log(lado)

