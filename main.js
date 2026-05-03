const button_info1 = document.getElementById("B.INFO.1")
const info1 = document.getElementById("I.INFO.1")
const button_info2 = document.getElementById("B.INFO.2")
const info2 = document.getElementById("I.INFO.2")
const button_info3 = document.getElementById("B.INFO.3")
const info3 = document.getElementById("I.INFO.3")
const button_info4 = document.getElementById("B.INFO.4")
const info4 = document.getElementById("I.INFO.4")
const button_info5 = document.getElementById("B.INFO.5")
const info5 = document.getElementById("I.INFO.5")
const button_tutorial = document.getElementById("B.TUTORIAL")
const tutorial = document.getElementById("I.TUTORIAL")

const button_Trigo = document.getElementById("Trigo")
const quantidade_Trigo = document.getElementById("QUANT.TRIGO")
const preco_Trigo = document.getElementById("PRECO.TRIGO")

const button_Galinhas = document.getElementById("Galinhas")
const quantidade_Galinhas = document.getElementById("QUANT.GALINHAS")
const preco_Galinhas = document.getElementById("PRECO.GALINHAS")

const button_vacas = document.getElementById("Vacas")
const quantidade_vacas = document.getElementById("QUANT.VACAS")
const preco_vacas = document.getElementById("PRECO.VACAS")

const button_porcos = document.getElementById("Porcos")
const quantidade_porcos = document.getElementById("QUANT.PORCOS")
const preco_porcos = document.getElementById("PRECO.PORCOS")

const button_lavar = document.getElementById("pratos")
const button_lavar2 = document.getElementById("pratos2")
const dinheiro = document.getElementById("DINHEIRO")

let money = 0
let barra = document.getElementById("barra")
let barra2 = document.getElementById("barra2")
let trigo, galinhas, vaca, porcos;
trigo = { price: 0, quant: 0, value: 0 }
galinhas = { price: 60, quant: 0, value: 0 }
vaca = { price: 540, quant: 0, value: 0 }
porcos = { price: 999, quant: 0, value: 0 }


function Att() {
    dinheiro.innerText = money
    quantidade_Trigo.innerText = trigo.quant
    preco_Trigo.innerText = trigo.price
    quantidade_Galinhas.innerText = galinhas.quant
    preco_Galinhas.innerText = galinhas.price
    quantidade_vacas.innerText = vaca.quant
    preco_vacas.innerText = vaca.price
    quantidade_porcos.innerText = porcos.quant
    preco_porcos.innerText = porcos.price
}

Att()



setInterval(function () {
    money += trigo.value
    money += galinhas.value
    money += vaca.value
    money += porcos.value
    Att()
}, 1000)

function BuyElement(element, a, b) {
    if (money >= element.price) {
        money -= element.price
        element.quant++
        element.value = b * element.quant
        element.price = Math.round(a * element.quant)
        Att()
    }
}
function buyInfo(el1, el2, price) {
    if (money >= price) {
        money -= price
        el1.classList.remove('oculto')
        el2.classList.add('oculto')
        dinheiro.innerText = money
    }
}

button_Trigo.addEventListener('click', function () {
    BuyElement(trigo, 15, 1)
})
button_Galinhas.addEventListener('click', function () {
    BuyElement(galinhas, 120, 4)
})
button_vacas.addEventListener('click', function () {
    BuyElement(vaca, 1080, 72)
})
button_porcos.addEventListener('click', function () {
    BuyElement(porcos, 1998, 333)
})

button_tutorial.addEventListener('click', function () {
    buyInfo(tutorial, button_tutorial, 0)
})

button_info1.addEventListener('click', function () {
    buyInfo(info1, button_info1, 50)
})

button_info2.addEventListener('click', function () {
    buyInfo(info2, button_info2, 500)
})

button_info3.addEventListener('click', function () {
    buyInfo(info3, button_info3, 650)
})

button_info4.addEventListener('click', function () {
    buyInfo(info4, button_info4, 1500)
})

button_info5.addEventListener('click', function () {
    buyInfo(info5, button_info5, 3500)
})

let a = true
button_lavar.addEventListener('mousedown', function () {

    if (a == true) {
        for (let i = 0; i < 10; i++) {
            a = false
            setTimeout(function () {
                barra.value += 10
                if (barra.value >= barra.max) {
                    barra.value = 0
                    money += 10
                    a = true
                    Att()

                }
            }, i * 250)
        }
    }
})

let b = true
button_lavar2.addEventListener('mousedown', function () {

    if (b == true) {
        for (let z = 0; z < 10; z++) {
            b = false
            setTimeout(function () {
                barra2.value += 10
                if (barra2.value >= barra2.max) {
                    barra2.value = 0
                    money += 999
                    b = true
                    Att()

                }
            }, z * 250)
        }
    }
})