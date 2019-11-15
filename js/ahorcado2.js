
  var palabra1="";
  var desmon1=new Array();
  var error=new Array();
  var esta;
  var cont2=5;


function dos(){
 //Array de palabras
 let palabras = [
  "dactilar",
  "gabinete",
  "ibicenco",
  "obedecer"
  ];
  // Palabra aleatoria
  var palabra = palabras[Math.floor(Math.random() * palabras.length)];

  // creo array de _ con la longitud de la palabra
  
  var desmon = [];
  for (var i = 0; i < palabra.length; i++) {
  desmon[i] = " _ ";
  }
  document.getElementById("resul3").innerHTML="se ha creado la palabra, adivinala solo tienes 5 INTENTOS, SUERTE!";
  return palabra1=palabra, desmon1=desmon;
}






function tres(){

  var guess = document.getElementById("texto").value;
  guess=guess.toLowerCase(); 
  var numLetras = palabra1.length;
  //  ESTE BUCLE ES UNICAMENTE PARA SUSTITUIR LA LETRA SI ESTA
  while (numLetras > 0) {
  // mostramos progreso
  // introducimos palabra 
   if (guess === "" || guess.length !== 1) {
  // salimos del bucle
  document.getElementById("resul1").innerHTML="por favor introduce una sola palabra";
   break;
   } else {
  // recorremos 
      for (var j = 0; j < palabra1.length; j++) {
      
      if (palabra1[j] === guess) {
        desmon1[j] = guess;
      numLetras--;
      }
      
      }
  //Con numLetras -1 controlo que pueda salir del bucle, sino tambien se puede poner break
      break;
   }
  // fin del bucle while
   }
 
//COMPROBAMOS COMO QUEDA LA PALABRA
  var string="";

    if(desmon1.indexOf(guess)!=-1){
      esta=true;
    }else{
      esta=false;
      error.push(guess);
      cont2=cont2-1;
    }
    var final=error.toString();
   if(esta==false){
     document.getElementById("txt").innerHTML="el caracter NO forma parte de la cadena";
     document.getElementById("resul4").innerHTML="Intentos restantes"+cont2;
     document.getElementById("resul1").innerHTML=final;
  }else{
    document.getElementById("txt").innerHTML="el caracter forma parte de la cadena: ";
    for (var j = 0; j < desmon1.length; j++) {
      string=string.concat(desmon1[j]);
     }
     document.getElementById("resul2").innerHTML=string;
     document.getElementById("resul1").innerHTML=final;
  }

  if(cont2<=0) {
    document.getElementById("resul5").innerHTML="HAS PERDIDO, NO TIENES MAS INTENTOS!";
  }

   if(palabra1==string && cont2>0){
    document.getElementById("resul5").innerHTML="ENHORABUENA HAS GANADO!";
  }
}