var btnEvaluar = document.querySelector('#btnNumero');
var inputnumero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');
var opciones = document.querySelector('#opciones');




btnEvaluar.addEventListener('click',evaluar);
opciones.addEventListener('change',evalOpciones);

function evalOpciones(){
    var numero = Number(inputnumero.value);
    var opcion = opciones.value;

    if(opcion === 'mitad'){
        resultado.textContent = 'La mitad es: ' + (numero/2);
    }
    else if(opcion == 'cuadrado'){
        resultado.textContent = 'El cuadrado es: ' + (numero*numero);
    }
    else if(opcion == 'par'){
        if(numero%2 === 0){
            resultado.textContent = 'El número ' +numero+ ' es par';
        }
        else{
            resultado.textContent = 'El número ' +numero+ ' es impar';
        }
    }
    else{
        resultado.textContent = "";
    }


}


function evaluar(){
    var numero = Number(inputnumero.value);
    if(numero>0){
        resultado.textContent = 'El número ' + numero + ' es positivo';
    }else if(numero<0){
        resultado.textContent = 'El número ' + numero + ' es negativo';
    }
    else{
        resultado.textContent = 'El número  ' + numero + ' es neutro';
    }
}