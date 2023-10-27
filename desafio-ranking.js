let vitorias = 78;
let derrotas = 27;
let rankeadas= "";


function saldoTotal(win, loose) {
  let saldo = vitorias - derrotas;
  return saldo
  
}

let saldao = saldoTotal (vitorias, derrotas)

if(saldao <= 10) {
    rankeadas = "Ferro.";
} 
else if(saldao >= 11 && saldao <= 20){
    rankeadas = "Bronze";
}

else if(saldao >= 21 && saldao <= 50){
    rankeadas = "Prata.";
}
else if(saldao >= 51 && saldao <= 80){
    rankeadas = "Ouro.";
}
else if(saldao >= 81 && saldao <= 90){
    rankeadas = "Diamante.";
}
else if(saldao >= 91 && saldao <= 100){
    rankeadas = "Lendário.";
}
else if(saldao >= 101){
   rankeadas = "Imortal.";
}



console.log("O herói tem saldo " + saldao + ", e está no nível de " + rankeadas);
