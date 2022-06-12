const frango = 14.90
const lasanha = 17.90
const parmegiana = 19.90
const feijoada = 16.90
const coca = 4.90
const guarana = 4.50
const cajuina = 2.90
const fanta = 4.80
const pudim = 7.90
const sorvete = 8.90
const bolo = 5.90
const mousse = 9.90

let verificarprato;
let verifcarbebida;
let verifcarsobremesa;
let nomeprato;
let precoprato;
let nomebebida;
let precobebida;
let nomesobremesa;
let precosobremesa;

let mensagem;
let mensagemURL;

 function pratoescolhido(escolhido){
    const itemclicado = document.querySelector(".prato .selecionado") 
    const verificarbotão = document.querySelector(".prato .selecionado .icone") 
    if (itemclicado !== null) { 
        itemclicado.classList.remove("selecionado")
        verificarbotão.classList.add("escondido") 
    }
    escolhido.classList.add("selecionado") 
    const botão = document.querySelector(".prato .selecionado .icone") 
    botão.classList.remove("escondido")  
    const buscarnome = document.querySelector(".prato .selecionado .nome-item")
    const buscarpreco = document.querySelector(".prato .selecionado .preço-item")
    nomeprato = buscarnome.innerHTML
    precoprato = buscarpreco.innerHTML
    verificarprato = "ok"
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${nomeprato} \n - Bebida: ${nomebebida} \n - Sobremesa: ${nomesobremesa} \n Total: R$ 27.70`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`
    }
 }  
 function bebidaescolhida(escolhido){
    const itemclicado = document.querySelector(".bebida .selecionado")
    const verificarbotão = document.querySelector(".bebida .selecionado .icone") 
    if (itemclicado !== null) {
        itemclicado.classList.remove("selecionado")
        verificarbotão.classList.add("escondido")
    }
    escolhido.classList.add("selecionado")
    const botão = document.querySelector(".bebida .selecionado .icone") 
    botão.classList.remove("escondido")
    const buscarnome = document.querySelector(".bebida .selecionado .nome-item")
    const buscarpreco = document.querySelector(".bebida .selecionado .preço-item")
    nomebebida = buscarnome.innerHTML
    precobebida = buscarpreco.innerHTML
    verifcarbebida = "ok"
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${nomeprato} \n - Bebida: ${nomebebida} \n - Sobremesa: ${nomesobremesa} \n Total: R$ 27.70`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`
    }  
 }
 function sobremesaescolhida(escolhido){
    const itemclicado = document.querySelector(".sobremesa .selecionado")
    const verificarbotão = document.querySelector(".sobremesa .selecionado .icone") 
    if (itemclicado !== null) {
        itemclicado.classList.remove("selecionado")
        verificarbotão.classList.add("escondido")
    }
    escolhido.classList.add("selecionado")
    const botão = document.querySelector(".sobremesa .selecionado .icone") 
    botão.classList.remove("escondido")
    const buscarnome = document.querySelector(".sobremesa .selecionado .nome-item")
    const buscarpreco = document.querySelector(".sobremesa .selecionado .preço-item")
    nomesobremesa = buscarnome.innerHTML
    precosobremesa = buscarpreco.innerHTML
    verifcarsobremesa = "ok"   
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${nomeprato} \n - Bebida: ${nomebebida} \n - Sobremesa: ${nomesobremesa} \n Total: R$ 27.70`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`  
    }
 }
 
 