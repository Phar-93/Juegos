//Creamos dos arrays para guardar las cartas
Players=[];
var resultado=document.getElementById ("resultado");

function init(){
    DrawCards(Players);
    HighCard(Players);
}
//Asignamos dos numeros a cada jugador, 2 jugadores
function DrawCards(Players){
    for(let i=0; i<2;i++)
    {
        Players[i]=new Array(2);
        for(let j=0; j<2;j++)
        {
            Players[i][j]=Math.floor((Math.random() * (12))+1);
        }
    }
}

//Obtenemos la carta mas alta de cada jugador y las comparamos
function HighCard(Players)
{

    var HiCardP1;
    var HiCardP2;
    Players[0][0]>=Players[0][1] ? HiCardP1=Players[0][0] : HiCardP1=Players[0][1];
    Players[1][0]>=Players[1][1] ? HiCardP2=Players[1][0] : HiCardP2=Players[1][1];

    if(HiCardP1>HiCardP2){
        resultado.innerHTML="Ha ganado el jugador 1 Carta:"+HiCardP1;
    }else if(HiCardP1<HiCardP2){
        resultado.innerHTML="Ha ganado el jugador 2 Carta:"+HiCardP2;
    }else{
        resultado.innerHTML="Nadie ha ganado";
    }
}
