function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fAno = document.getElementById('txtano')
   var res = document.querySelector('#res')

   if(fAno.value.length == 0 ||fAno.value > ano ){
        window.alert('Verifique os dados e tente novamente!')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','imagem/criançahomem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagem/jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagem/adultohomem.png')
            }else{
                //Idoso
                img.setAttribute('src','imagem/velhohomem.png')
            }
       }else {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','imagem/criançamulher.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagem/jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','imagem/mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src','imagem/mulhervelha.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
   }
}