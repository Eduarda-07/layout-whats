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

 
    card.appendChild(novoNome)

    divContatos.appendChild(card)

    card.addEventListener('click',async function(){
        await preencherConversas(link.name)
    })


}

async function preencherContatos(){
  
    const contatos = await mostrarContatos()
   
    contatos.dados_contato.forEach(criarContatos)

    console.log (contatos) 
}



async function mostrarConversas (name){
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/conversas?numero=11987876567&contato=${name}`
    const response = await fetch(url)
    const data = await response.json()

    return data
} 

async function criarConversas (name){
    const divConversas = document.getElementById('conversas')
    const menssagem = document.createElement('div')
    menssagem.classList.add('menssagem')

    const novaMenssagem =  document.createElement('p')
    const time1 =  document.createElement('small')

    novaMenssagem.textContent = name.conversas.content
    time1.textContent = name.conversas.time
    // const novaResposta =  document.createElement('p')
    // const time2 =  document.createElement('small')
    menssagem.appendChild(novaMenssagem)
    menssagem.appendChild(time1)

    divConversas.appendChild(menssagem)

}

async function preencherConversas(name){
  
    const dados = await mostrarConversas(name)
   
    const conversa = dados.conversas
    criarConversas(conversa)

    console.log (conversa) 
}

preencherContatos()
