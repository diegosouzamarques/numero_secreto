const menorValor = 1
const maiorValor = 1000 
const gerarNumeroAleatorio = ()=>{
    return parseInt(Math.random() * maiorValor + 1);
}
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

const eMenorValor = document.getElementById("menor-valor");
const eMaiorValor = document.getElementById("maior-valor");
eMenorValor.innerHTML = menorValor;
eMaiorValor.innerHTML = maiorValor;