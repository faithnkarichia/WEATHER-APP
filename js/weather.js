const inputArea=document.querySelector('.input-area')
const searchBtn=document.querySelector('.search-button')

searchBtn.addEventListener('click',()=>{
    const city=inputArea.value// we are getting the city from the input
    const apiKey='3128fbb4992ed05f3acd09a4be25abf2';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon; //

            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            const resultsDiv=document.querySelector('.results')
            resultsDiv.innerHTML=`<h2>${cityName}</h2>
            <p>${(temperature - 273.15).toFixed(2)}°C</p>
            <p>${description}</p>
            <img src="${iconUrl}" alt="Weather icon"> <!-- Add the icon here -->`
            resultsDiv.style.display='block'

        })
        .catch(error=>{
            console.error('Error fetching the weather:', error);
        })
   
})