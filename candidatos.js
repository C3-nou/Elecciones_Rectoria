function nextCandidato(cambio){
    
    var imagen = document.getElementById('imgCandidato');
    posicionImagen = imagen.getAttribute("aria-label");
    var nameElect = document.getElementById("nameElecto");

    var SiguienteImagen = parseInt(posicionImagen) + parseInt(cambio);

    if(SiguienteImagen == 0){
        SiguienteImagen = 5;
    }else if(SiguienteImagen > 5){
        SiguienteImagen = 1;
    }
    
    switch (SiguienteImagen) {
        case 1:
            nameElect.innerHTML = "Francisco Mejía Pardo";
            break;
        case 2:
            nameElect.innerHTML = "Rodrigo Martínez Díaz";
            break;
        case 3:
            nameElect.innerHTML = "Luis Aurelio";
            break;
        case 4:
            nameElect.innerHTML = "Cesar Arturo Castillo";
            break;
        case 5:
            nameElect.innerHTML = "Édgar Varela Barrios";
            break;
        default:
            break;
    }
    imagen.attributes["aria-label"].value = SiguienteImagen;
    imagen.src = "img/"+SiguienteImagen+".png";

    //console.log(SiguienteImagen);
    //console.log(imagen.getAttribute("aria-label"));
}