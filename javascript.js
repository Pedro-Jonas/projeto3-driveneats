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

 function pratoescolhido(escolhido, valor){
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
    verificarprato = "ok"
    precoprato = valor
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        const valorfinal = (precoprato + precobebida + precosobremesa).toFixed(2)
        mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: R$ ${valorfinal}`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`
    }
 }  
 function bebidaescolhida(escolhido, valor){
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
    verifcarbebida = "ok"
    precobebida = valor
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        const valorfinal = (precoprato + precobebida + precosobremesa).toFixed(2)
        mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: R$ ${valorfinal}`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`
    }  
 }
 function sobremesaescolhida(escolhido, valor){
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
    precosobremesa = valor
    if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
        const valorfinal = (precoprato + precobebida + precosobremesa).toFixed(2)
        mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: R$ ${valorfinal}`
        mensagemURL = encodeURIComponent(mensagem)
        const enviarpedido = `https://wa.me/+5588999638133?text=${mensagemURL}`
        const link = document.querySelector(".baixo")
        link.innerHTML = `<a href= ${enviarpedido}><div class="info verde" onclick="fazerpedido(this)">
        Fechar pedido </div></a>`  
    }
 }
 
 