// Manipulación del DOM
let numeroSecreto=0;
let intento=0;
let ListaNumeroSorteados=[];
let numeroMaximo=10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
 return;   
}

function intentoDeUsuario(){
    let numeroDeUsuario= document.getElementById('valorUsuario').value;
    console.log(numeroSecreto);    
    if(numeroDeUsuario==numeroSecreto){
            asignarTextoElemento('P',`Acertaste el numero en ${intento} ${(intento==1)?'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(numeroDeUsuario>numeroSecreto){asignarTextoElemento('P','el numero secreto es menor'); }
            else{asignarTextoElemento('P','el numero secreto es mayor');}

intento++;
limpiarCaja();
        }
    return;
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto=generarNumeroSecreto();
    intento=1;    
}
condicionesIniciales();
function reiniciarJuego(){
//limpiar Caja
limpiarCaja();
//intervalo de numero
condicionesIniciales();
//generar el numero aleatorio
//desabilitar boton de nuevo juego
//inicializarel numero intento
document.querySelector('#reiniciar').setAttribute('disable','true');
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value="";
}

function generarNumeroSecreto(){
 let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
 console.log(ListaNumeroSorteados);
//si y sorteamos todos los numero 
if(ListaNumeroSorteados.length==numeroMaximo){asignarTextoElemento('p','yase sortearon todos los numeros posibles')
}else{
 //si el numero generado esta en l a lista
 if(ListaNumeroSorteados.includes(numeroGenerado)){
  return generarNumeroSecreto();
}else{
  ListaNumeroSorteados.push(numeroGenerado);
  return numeroGenerado;
}}
    }




