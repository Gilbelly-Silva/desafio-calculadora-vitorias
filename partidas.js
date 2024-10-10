
let saldoDeVitorias;
let nivel;
function calcularRank(vitorias, derrotas){
    return vitorias - derrotas;
}

saldoDeVitorias = calcularRank(100, 15);

if(saldoDeVitorias <= 10){
    nivel = "Ferro";
}else if(saldoDeVitorias >=11 && saldoDeVitorias <= 20){
    nivel = "Bronze";
}else if(saldoDeVitorias >=21 && saldoDeVitorias <= 50){
    nivel = "Prata";
}else if(saldoDeVitorias >=51 && saldoDeVitorias <= 80){
    nivel = "Ouro";
}else if(saldoDeVitorias >=81 && saldoDeVitorias <= 90){
    nivel = "Diamante";
}else if(saldoDeVitorias >=91 && saldoDeVitorias <= 100){
    nivel = "Lendário";
}else if(saldoDeVitorias >=101 ){
    nivel = "Imortal";
}

console.log(`O Herói tem saldo de ${saldoDeVitorias} está no nível de ${nivel}.`)
