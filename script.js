//selecionar input com numero digitado
let valorDigitado = document.querySelector('#valorEmReal');
//selecionar os elementos radios(criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira');

let aviso = document.querySelector('#aviso');

//selecionando os botoes

let btnConverter = document.querySelector('#btnConverter');
let btnLimpar = document.querySelector('#btnLimpar');

//Cotações do dia 23/01/2023

let valorDoDolar = 4.93;
let valorDoEuro =  5.39;
let valorDaLibra = 6.17;
let valorDoBitcoin = 132630.88;
let valorEmReal = 0;

let moedaEstrangeira = '';
let moedaConvertida = '';

//Mensagem formatada para exibir valores monetarios
function mesagemFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida "+ moedaConvertida)
    aviso.textContent = "O valor "+ (valorEmReal).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+" convertido em "+ moedaEstrangeira+ " é " + moedaConvertida
}

function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

btnConverter.addEventListener('click',function(){
    valorEmReal = parseFloat(valorDigitado.value)
    console.log('Escolha a moeda estrangeira')
    for(let i=0;i<moedaSelecionada.length;i++){
        if(moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }
    
