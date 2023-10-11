
// Exercise one,Chapter 3

let min = function(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
console.log(min(0,10));
console.log(min(0,-10));

// Exercise 2, Chapter 3

function esPar(num,historia){
if(num>-1){
    if(num===0){
        historia+= ` Es par`;
        return historia;
    }
    else if(num===1){
        historia+= ` Es impar`;
        return historia;
    }
    else{
        return esPar(num - 2, `(${historia} - 2)`);
    }
}
else{
    return null;
}
}
console.log(esPar(10,"10"));

// Exercise 3, Chapter 3

let contarFs = txt =>{
    let j = txt.length;
    let numF=0;
    for(let i=0;i<j; i++){
        if(txt[i] == "F"){
            numF+=1;
        }
    }
    return numF;
}
contarFs("FFF");

let contarCaracteres = (txt,abc) =>{
    let j = txt.length;
    let numAbc=0;
    for(let i=0;i<j; i++){
        if(txt[i] == abc){
            numAbc+=1;
        }
    }
    return numAbc;
}
contarCaracteres("Hola","H");

// Execise 1, Chapter 4

let rango = (inicio , final , paso) =>{
    let num = [];
    if(final > inicio){
        for(let i = inicio ; i <= final ; i += paso ) {
            num.push(i) 
            // console.log(num);
        }
    }
    else{
        for(let i = inicio ; i >= final ; i += paso ) {
            num.push(i) 
            // console.log(num);
        }
    }
    return num;
}
// rango(5,2,-1);
// let lista = [1,2,3];
let suma = (numeros) =>{
    let a = 0;
    for(let i=0; i < numeros.length; i++){
        console.log(numeros[i])
        console.log(a += i)
    }
}
suma(lista);

console.log(suma(rango(1, 10)));

// Execise 2, Chapter 4
// nose=['A','B','C'];

let revertirArray =(lista) =>{
    let reversed = [];
    for(let i = lista.length-1; i >= 0; i--){
        reversed += lista[i];
    }
    return reversed
}
console.log(revertirArray(nose))

nose=['A','B','C'];

let revertirArrayEnSuLugar =(lista) =>{
    for(let i = lista.length-2 ; i >= 0; i--){
        lista.push(lista[i]);
    }
    j = lista.length - 3;
    for(let i =0; i < j; i++ ){
        lista.shift(lista[i]);
    }
    return lista
}
console.log(revertirArrayEnSuLugar(nose))
//exercise 3, chapter 4

function arrayALista(array) {
    let lista = null;
    for (let i = array.length - 1; i >= 0; i--) {
      lista = {valor: array[i], resto: lista};
    }
    return lista;
  }
  let nose = ['A','B','C']
    arrayALista[nose];
function listaAArray(lista) {
        let array = [];
        for (let index = lista; index; index = index--) {
          array.push(index.valor);
        }
        return array;
      }