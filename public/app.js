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
        var weatherIcon = data['weather'][0]['icon']; // Codice dell'icona del meteo
  
        // Aggiorniamo il DOM con i valori ottenuti
        main.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = "Temp - "+tempValue + "°C";
        input.value ="";
  
        // Assegniamo l'immagine dell'icona del meteo
        var imagePath = 'pioggia.png'; // Percorso predefinito per l'immagine
        if (weatherIcon === '01d' || weatherIcon === '01n') {
            imagePath = 'soleggiato.png'; 
        } else if (weatherIcon === '02d' || weatherIcon === '02n') {
            imagePath = 'poche-nuvole.png'; 
        } else if (weatherIcon === '03d' || weatherIcon === '03n' || weatherIcon === '04d' || weatherIcon === '04n') {
            imagePath = 'cielo-coperto.png'; 
        } else if (weatherIcon === '09d' || weatherIcon === '09n' || weatherIcon === '10d' || weatherIcon === '10n') {
            imagePath = 'pioggia-leggera.png'; 
        } else if (weatherIcon === '11d' || weatherIcon === '11n') {
            imagePath = 'temporale.png'; 
        } else if (weatherIcon === '13d' || weatherIcon === '13n') {
            imagePath = 'neve.png'; 
        }
        var weatherIconElement = document.querySelector('.weather-icon');
        weatherIconElement.src = imagePath;
  
        // Ora facciamo una nuova richiesta API per ottenere i dati sulle precipitazioni e il vento in tempo reale
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1e65ca83bd7126fcdec4245bac666556&units=metric')
          .then(response => response.json())
          .then(data => {
            var precipitationValue = data['weather'][0]['main']; // Prendiamo le precipitazioni dall'API corretta
            var windSpeed = data['wind']['speed']; // Prendiamo la velocità del vento dall'API corretta
            
            // Aggiungiamo i valori di precipitazioni e vento al DOM
            document.querySelector('.precipitation').innerHTML = precipitationValue;
            document.querySelector('.wind').innerHTML = windSpeed + " m/s";
          })
          .catch(err => alert("Errore nel recupero delle informazioni sulle precipitazioni e il vento"));
    })
    .catch(err => alert("Nome della città inesistente"));
  })
  

  

/*
Inserimento scelta lingua
Cambio scritte
stampa di informazioni del .json cioè checkbox con dentro tutti i dati
previsione del meteo dei giorni successivi
*/