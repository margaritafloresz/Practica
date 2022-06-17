console.log ("Se nota que todavia me extrañas");

setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  let frase = document.getElementsByTagName("h2")[1].innerHTML;

  if ( frase.innerHTML == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    frase.innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}
