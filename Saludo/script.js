console.log ("Se nota que todavia me extrañas");

setInterval(cambiarSaludo, 2000);

/**
 * Cambia la frase en el titulo h2
  */

function cambiarSaludo() {
  let frase = document.getElementsByTagName("h2")[1];

  if ( document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre") {
    document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
  } else {
    frase.innerHTML = "Ganando como siempre";
  }
  //console.log("frase :" + frase);
}

