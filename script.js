//MAPEAMENTOS
const currency1 = document.querySelector('.currency-1') //MOEDA 1
const currency2 = document.querySelector('.currency-2') //MOEDA 2

const valorDigitado = document.querySelector('.valor') //CAMPO VALOR DIGITADO
const botao = document.querySelector('button') //BOTÃO
const invert = document.querySelector('#invert')

const flag1 = document.querySelector('.flag-left')//BANDEIRA DA ESQUERDA
const currencyName1 = document.querySelector('.nome-amostra-left')//NOME DA MOEDA DA ESQUERDA
const valueToConvert = document.querySelector('.valor-amostra-left') //VALOR DA ESQUERDA
const flag2 = document.querySelector('.flag-right')//BANDEIRA DA DIREITA
const currencyName2 = document.querySelector('.nome-amostra-right')//NOME DA MOEDA DA DIREITA
const valueConverted = document.querySelector('.valor-amostra-right') //VALOR DA DIREITA

const update = document.querySelector('#update') //INFORMAÇÃO SOBRE A DATA E HORÁRIO DA ATUALIZAÇÃO





//CONSUMO DA API PARA COTAÇÃO ATUALIZADA DAS MOEDAS
const currencies = 'BRL-USD,EUR-USD,BTC-USD,GBP-USD,JPY-USD,ARS-USD,CHF-USD' //MOEDAS CONVERTIDAS PARA DOLLAR
const url = `https://economia.awesomeapi.com.br/last/${currencies}` //ACESSO A API PASSANDO A VARIÁVEL DE CIMA

let date = 0

//FAZ O CÁLCULO DE CONVERSÃO
async function calculate() {
    const response = await fetch(url)
    const data = await response.json()

    //VALORES REFERÊNCIA PARA BASE DE CÁLCULO (TODOS ESTÃO CONVERTIDOS PARA DOLLAR)
    const refEuro = data.EURUSD['bid']
    const refFranco = data.CHFUSD['bid']
    const refLibra = data.GBPUSD['bid']
    const refPeso = data.ARSUSD['bid']
    const refReal = data.BRLUSD['bid']
    const refIene = (data.JPYUSD['bid']) / 100
    const refBitcoin = data.BTCUSD['bid']


    date = data.BTCUSD['create_date']
    update.innerHTML = `Atualizado em ${date}`

    // IDENTIFICA A MOEDA 1 E APLICA O VALOR REFERÊNCIA NA VARIÁVEL ABAIXO
    let refValue1 = 0 //VARIÁVEL QUE RECEBE O VALOR REFERÊNCIA
    switch (currency1.value) {
        case 'dollar':
            refValue1 = 1
            break;

        case 'euro':
            refValue1 = refEuro
            break;

        case 'franco':
            refValue1 = refFranco
            break;

        case 'libra':
            refValue1 = refLibra
            break;

        case 'peso':
            refValue1 = refPeso
            break;

        case 'real':
            refValue1 = refReal
            break;

        case 'iene':
            refValue1 = refIene
            break;

        case 'bitcoin':
            refValue1 = refBitcoin
            break;
    }


    // IDENTIFICA A MOEDA 2 E APLICA O VALOR REFERÊNCIA NA VARIÁVEL ABAIXO
    let refValue2 = 0 //VARIÁVEL QUE RECEBE O VALOR REFERÊNCIA
    switch (currency2.value) {
        case 'dollar':
            refValue2 = 1
            break;

        case 'euro':
            refValue2 = refEuro
            break;

        case 'franco':
            refValue2 = refFranco
            break;

        case 'libra':
            refValue2 = refLibra
            break;

        case 'peso':
            refValue2 = refPeso
            break;

        case 'real':
            refValue2 = refReal
            break;

        case 'iene':
            refValue2 = refIene
            break;

        case 'bitcoin':
            refValue2 = refBitcoin
            break;
    }

    //FAZ O CÁLCULO DE CONVERSÃO COM BASE NAS MOEDAS SELECIONADAS
    const calc = (valorDigitado.value * refValue1 / refValue2)

    showResult(calc)
}
// FIM DA FUNÇÃO CALCULATE


//FAZ AS ALTERAÇÕES NO CAMPO DE AMOSTRA
function showResult(result) {

    flag1.src = `./assets/${currency1.value}.png`//ALTERA A BANDEIRA DA ESQUERDA
    currencyName1.innerHTML = currency1.value[0].toUpperCase() + currency1.value.substring(1)//ALTERA O NOME DA MOEDA DA ESQUERDA
    flag2.src = `./assets/${currency2.value}.png`//ALTERA A BANDEIRA DA DIREITA
    currencyName2.innerHTML = currency2.value[0].toUpperCase() + currency2.value.substring(1)//ALTERA O NOME DA MOEDA DA DIREITA

    switch (currency1.value) {
        case 'dollar':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'USD'
            }).format(valorDigitado.value)
            break;

        case 'euro':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'EUR'
            }).format(valorDigitado.value)
            break;

        case 'franco':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'CHF'
            }).format(valorDigitado.value)
            break;

        case 'libra':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'GBP'
            }).format(valorDigitado.value)
            break;

        case 'peso':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'ARS'
            }).format(valorDigitado.value)
            break;

        case 'real':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valorDigitado.value)
            break;

        case 'iene':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'JPY'
            }).format(valorDigitado.value)
            break;

        case 'bitcoin':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC'
            }).format(valorDigitado.value)
            break;
    }

    switch (currency2.value) {
        case 'dollar':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'USD'
            }).format(result)
            break;

        case 'euro':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'EUR'
            }).format(result)
            break;

        case 'franco':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'CHF'
            }).format(result)
            break;

        case 'libra':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'GBP'
            }).format(result)
            break;

        case 'peso':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'ARS'
            }).format(result)
            break;

        case 'real':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(result)
            break;

        case 'iene':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'JPY'
            }).format(result)
            break;

        case 'bitcoin':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC'
            }).format(result)
            break;
    }
}

//FAZ A INVERSÃO DAS MOEDAS
function invertCurrencies(){
    let aux = currency1.value
    currency1.value = currency2.value
    currency2.value = aux
}

//FAZ A INVERSÃO DAS SETAS
let rotation = 0
function inversion() {
    invertCurrencies()
    calculate()

    invert.style.transform = `rotateX(${rotation + 180}deg)`
    rotation += 180
}

currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)
botao.addEventListener('click', calculate)
invert.addEventListener('click', inversion)





