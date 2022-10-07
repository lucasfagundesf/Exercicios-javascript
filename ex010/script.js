function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'imagem/manha.png'
        document.body.style.background = '#fde6a7'
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#fdb409'
    }else {
        //BOA NOITE!
        img.src = 'imagem/noite.png'
        document.body.style.background = '#131d39'
    }
}