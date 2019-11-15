let guess = document.getElementById("texto").value;

   //Array de palabras
   var palabras = [
   "javascript",
   "hola",
   "adios",
   "examen"
   ];
   // Palabra aleatoria
   var palabra = palabras[Math.floor(Math.random() * palabras.length)];
 
  // let resultado =document.getElementById("resul");
  // creo array de _ con la longitud de la palabra
   var desmon = [];
   for (var i = 0; i < palabra.length; i++) {
   desmon[i] = "_";
   }
   let numLetras = palabra.length;
  //  document.write(numLetras);
  
  while (numLetras > 0) {
  // mostramos progreso
  // resultado.innerHTML=desmon.join(" ");
  // document.write(desmon.join(" "));
  
  // introducimos palabra [AQUI SE DEBERIA DE IMPLEMENTAR ALGO PARA QUE VUELVA A PEDIRLA]
  //  var guess = prompt("Por favor introduce una palabra");
   if (guess === "") {
  // salimos del bucle
   break;
   } else if (guess.length !== 1) {
  // // document.body.innerHTML = "Por favor introduce una palabra."; 
  document.write("Por favor introduce una palabra.");
  //resultado.innerHTML="Por favor introduce una palabra.";
   } else {
  // recorremos 
   for (var j = 0; j < palabra.length; j++) {
  
   if (palabra[j] === guess) {
     desmon[j] = guess;
   numLetras--;
   }
  
   }
  //Con numLetras -1 controlo que pueda salir del bucle, sino tambien se puede poner break
   if(numLetras==palabra.length){
  numLetras=-1;
   }
  
   }
  // fin del bucle while
   }
   if(numLetras==palabra.length || numLetras==-1){
      document.write("el caracter No forma parte de la cadena: ",palabra);
  }else{
      document.write("el caracter forma parte de la cadena: ",palabra);
  }
  
  }