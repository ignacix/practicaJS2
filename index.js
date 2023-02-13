
let finDeAño = new Date(2024,0,0).getTime();





function calculo(){

    let hoy = new Date().getTime(); 

    let resultado;

    let dias, horas, minutos, segundos;

    diferencia = finDeAño-hoy
    

    dias = Math.floor(diferencia/(1000*60*60*24));

    horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));
    minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));
    segundos = Math.floor((diferencia % (1000*60))/1000);

    resultado = dias + " DAYS "+ horas +" HS "+ minutos +" MIN " + segundos +" SEG ";

    document.getElementById("texto").innerHTML = resultado;
    console.log(hoy);
}


let diferencia = setInterval(calculo, 1000);



