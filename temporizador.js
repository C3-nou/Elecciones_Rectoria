
var tiempo = 10;
var conteo = new Date(tiempo * 60000);
var cronometro = document.getElementById('cronometro');

function temporizador(){

    if(localStorage.getItem("iniciar")){

        if(cronometro.innerHTML == "02:01"){
            var audio = document.getElementById('2minutos');
            audio.play();
        }else if(cronometro.innerHTML == "01:00"){
            var audio = document.getElementById('1minutos');
            audio.play();
        }else if(cronometro.innerHTML == "00:00"){
            var audio = document.getElementById('0minutos');
            audio.play();
            localStorage.removeItem("iniciar");
        }

        if(conteo.getTime() > 0){
            conteo.setTime(conteo.getTime() - 1000);
            if(conteo.getSeconds() < 10){
                cronometro.innerHTML = "0"+conteo.getMinutes()+":0"+conteo.getSeconds();
            }else{
                cronometro.innerHTML = "0"+conteo.getMinutes()+":"+conteo.getSeconds();
            }
        }

    }

}

setInterval(temporizador, 1000);

function iniciar(){

    if(cronometro.innerHTML == "00:00"){
        cronometro.innerHTML = "10:00";
    }

    localStorage.setItem("iniciar", 1);
    conteo = new Date(tiempo * 60000);
    temporizador();
}

function reiniciar(){
    if(localStorage.getItem("iniciar")){
        localStorage.removeItem("iniciar");
    }
    cronometro.innerHTML = "10:00";
    conteo = new Date(tiempo * 60000);
}