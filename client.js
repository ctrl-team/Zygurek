function zegareczek(){
  let godzina;
  godzina = new Date().getHours();
  let minuta = new Date().getMinutes();
  if(godzina < 10 && godzina >= 4){
    document.body.style.background = "url('/poranek.png')"
  }
  else if(godzina < 20 && godzina >= 10){
    document.body.style.background = "url('/popoludnie.png')"
  }
  else{
    document.body.style.background = "url('/noc.png')"
  }
  document.getElementById("godzinka").innerHTML = godzina + ":" + minuta;
  setTimeout("zegareczek()" , 1000)
}