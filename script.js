//MAPEAMENTOS
const currency1 = document.querySelector('.currency-1') //MOEDA 1
const currency2 = document.querySelector('.currency-2') //MOEDA 2

const valorDigitado = document.querySelector('.valor') //CAMPO VALOR DIGITADO
const botao = document.querySelector('button') //BOTÃO

const flag1 = document.querySelector('.flag-left')//BANDEIRA DA ESQUERDA
const currencyName1 = document.querySelector('.nome-amostra-left')//NOME DA MOEDA DA ESQUERDA
const valueToConvert = document.querySelector('.valor-amostra-left') //VALOR DA ESQUERDA
const flag2 = document.querySelector('.flag-right')//BANDEIRA DA DIREITA
const currencyName2 = document.querySelector('.nome-amostra-right')//NOME DA MOEDA DA DIREITA
const valueConverted = document.querySelector('.valor-amostra-right') //VALOR DA DIREITA


//FAZ O CÁLCULO DE CONVERSÃO
function calculate() {
    //VALORES REFERÊNCIA PARA BASE DE CÁLCULO (TODOS ESTÃO CONVERTIDOS PARA DOLLAR)
    const refDollar = 1
    const refEuro = 1.0908
    const refLibra = 1.2649
    const refReal = 0.2033
    const refYen = 0.0071
    const refBitcoin = 42809.70

    // IDENTIFICA A MOEDA 1 E APLICA O VALOR REFERÊNCIA NA VARIÁVEL ABAIXO
    let refValue1 = 0 //VARIÁVEL QUE RECEBE O VALOR REFERÊNCIA
    switch (currency1.value) {
        case 'dollar':
            refValue1 = refDollar
            break;

        case 'euro':
            refValue1 = refEuro
            break;

        case 'libra':
            refValue1 = refLibra
            break;

        case 'real':
            refValue1 = refReal
            break;

        case 'yen':
            refValue1 = refYen
            break;

        case 'bitcoin':
            refValue1 = refBitcoin
            break;
    }


    // IDENTIFICA A MOEDA 2 E APLICA O VALOR REFERÊNCIA NA VARIÁVEL ABAIXO
    let refValue2 = 0 //VARIÁVEL QUE RECEBE O VALOR REFERÊNCIA
    switch (currency2.value) {
        case 'dollar':
            refValue2 = refDollar
            break;

        case 'euro':
            refValue2 = refEuro
            break;

        case 'libra':
            refValue2 = refLibra
            break;

        case 'real':
            refValue2 = refReal
            break;

        case 'yen':
            refValue2 = refYen
            break;

        case 'bitcoin':
            refValue2 = refBitcoin
            break;
    }

    //FAZ O CÁLCULO DE CONVERSÃO COM BASE NAS MOEDAS SELECIONADAS
    const result = valorDigitado.value * refValue1 / refValue2

    return result
}
// FIM DA FUNÇÃO CALCULATE


//FAZ AS ALTERAÇÕES NO CAMPO DE AMOSTRA
function showResult() {
    calculate()

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

        case 'libra':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'GBP'
            }).format(valorDigitado.value)
            break;

        case 'real':
            valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valorDigitado.value)
            break;

        case 'yen':
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
            }).format(calculate())
            break;

        case 'euro':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'EUR'
            }).format(calculate())
            break;

        case 'libra':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'GBP'
            }).format(calculate())
            break;

        case 'real':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(calculate())
            break;

        case 'yen':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'JPY'
            }).format(calculate())
            break;

        case 'bitcoin':
            valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC'
            }).format(calculate())
            break;
    }
}

currency1.addEventListener('change', showResult)
currency2.addEventListener('change', showResult)
botao.addEventListener('click', showResult)













