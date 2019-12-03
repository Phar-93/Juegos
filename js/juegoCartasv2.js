//Creamos dos arrays para guardar las cartas

var resultado=document.getElementById ("resultado");
function init(){
    Players=[];
    DrawCards(Players, 3);
    HighCard(Players);
}
//Asignamos dos numeros a cada jugador, 3 jugadores
function DrawCards(Players, n){
    for(let i=0; i<n;i++)
    {
        Players[i]=new Array(2);
        for(let j=0; j<2;j++)
        {
            Players[i][j]=Math.floor((Math.random() * (12))+1);
            console.log("Jugador"+i+" Carta:"+Players[i][j]);
        }
    }
}

//Obtenemos la carta mas alta de cada jugador y las comparamos
function HighCard(Players)
{
    var HighCard=[Players.length];
    //Metemos en un array la carta mas alta
    for(let i =0; i<Players.length;i++){
        Players[i][0]>=Players[i][1] ? HighCard[i]=Players[i][0] : HighCard[i]=Players[i][1]; 
        console.log("Jugador"+i+" Carta: "+HighCard[i]);
    }

    var rep=0;
    var max=-Infinity;
    var jugador=0;
    for(let i=0; i<HighCard.length;i++)
    {
        if(HighCard[i]>max)
        {
            max=HighCard[i];
            rep=0;
            jugador=i+1;
        }
        else if(HighCard[i]==max)//Se ha repetido el numero maximo entonces se reinicia la partida
        {
            rep=1;
        }
    }
    if(rep==1){
        init();
    }else{
        resultado.innerHTML="El jugador"+jugador+" ha ganado";
    }
    
}