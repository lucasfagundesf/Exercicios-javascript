let n = window.document.querySelector('#txtn')
let sel = window.document.querySelector('#sel')
let res = window.document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(n.value) && !naLista(n.value, valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já está na lista.')
    }
    n.value = ''
    n.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    } else {
        let total=valores.length
        valores.sort()
        let soma = 0
        let media = 0
        let menor = valores[0]
        let maior = valores.slice(-1)

        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma /total


        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML  += `<p> O menor número é ${menor}.</p>`
        res.innerHTML += `<p> O maior número é ${maior}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p> `
    }
}