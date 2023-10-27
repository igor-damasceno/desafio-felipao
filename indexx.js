let nomeJogador = "Jorge";
let pontos = 6741;
let xp = "";


if (pontos <= 1000) {
    xp = "Ferro";
} 
else if(pontos >= 1001 && pontos <= 2000){
    xp = "Bronze";
}

else if(pontos >= 2001 && pontos <= 5000){
    xp = "Prata";
}
else if(pontos >= 6001 && pontos <= 7000){
    xp = "Ouro";
}
else if(pontos >= 7001 && pontos <= 8000){
    xp = "Platina";
}
else if(pontos >= 8001 && pontos <= 9000){
    xp = "Ascendente";
}
else if(pontos >= 9001 && pontos <= 10000){
    xp = "Imortal";
}
else {
    xp = "Radiante"
    
}


console.log("O herói de nome " + nomeJogador + " está no nível " + xp + ".");
