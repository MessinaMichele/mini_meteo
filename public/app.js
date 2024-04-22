var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&lang=&appid=1e65ca83bd7126fcdec4245bac666556&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  console.log(data)
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Nome della città inesistente"));
})
/*
Inserimento scelta lingua
inserimento scelta unità di misura 
Cambio scritte
stampa di informazioni del .json cioè   
inserimento immagini inerente al tempo
previsione del meteo dei giorni successivi
*/



