
//eleciona a Data local e separa os parametros especificos de hora e hora completa//
var tempo = new Date
var hora = tempo.getHours()
var minutos = tempo.toLocaleTimeString()

//captura o elemento (ID) através do DOM para modificar os atributos//
var imagem = window.document.getElementById('imagem')
var div = window.document.getElementById('msg') 
var saudacao = window.document.getElementById('saudacao')

// Substitui o texto do conteúdo capturado//
div.innerHTML = `Agora são ${minutos} `

//Funcão que definine uma imagem e cor de fundo a Cada Hora do Dia//
function atualizaFoto(){
    if (hora >= 6 && hora < 12) {
        imagem.src = 'manha.jpg'
        document.body.style.background = '#E1BE05'
        saudacao.innerHtml = 'Bom Dia!'
        
    }
    else if (hora >= 12 && hora <= 18) {
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#C96416'
        saudacao.innerHTML = 'Boa Tarde!'
    }
    else {
        imagem.src = 'noite.jpg'
        document.body.style.background = "#532F49"
        saudacao.innerHTML = 'Boa Noite'
    }

}








