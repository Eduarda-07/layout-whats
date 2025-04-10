//serve para mostrar os erros ocultos no terminal
"use strict"

async function mostrarContatos (){
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`
    const response = await fetch(url)
    const data = await response.json()

    return data
} 

function criarContatos (link){
    const divContatos = document.getElementById('contatos')
    const card = document.createElement('div')
    card.classList.add('cards')


    const novoNome =  document.createElement('h2')
    novoNome.textContent = link.name

    const novaImg = document.createElement('img')
    novaImg.src = link.profile

    card.appendChild(novaImg)
    card.appendChild(novoNome)

    divContatos.appendChild(card)

}

async function preencherContatos(){
  
    const contatos = await mostrarContatos()
   
    contatos.dados_contato.forEach(criarContatos)

    console.log (contatos) 
}

preencherContatos()