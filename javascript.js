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
    verificarprato = "ok"
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
    verifcarbebida = "ok"
 }
 function sobremesaescolhida(escolhido){
    const itemclicado = document.querySelector(".sobremesa .selecionado")
    const verificarbotão = document.querySelector(".sobremesa .selecionado .icone") 
    if (itemclicado !== null) {
        itemclicado.classList.toggle("selecionado")
        verificarbotão.classList.add("escondido")
    }
    escolhido.classList.toggle("selecionado")
    const botão = document.querySelector(".sobremesa .selecionado .icone") 
    botão.classList.remove("escondido")
    verifcarsobremesa = "ok"
 }
if ((verificarprato === "ok") && (verifcarbebida === "ok") && (verifcarsobremesa === "ok")) {
    alert("oiiiii")
}