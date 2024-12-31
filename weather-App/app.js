const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('search');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', async () => {
  const cityName = cityInput.value.trim(); 
  const apiKey = '5da369c0260b4ef198374745243112'; 
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found'); 
    }
    const data = await response.json();
    displayWeather(data); 
  } catch (error) {
    weatherResult.textContent = error.message;
  }
});

// Function to display weather
function displayWeather(data) {
  const temp = data.current.temp_c; 
  const weatherDescription = data.current.condition.text; 
  const cityName = data.location.name; 
  const weatherIcon = data.current.condition.icon; 

  weatherResult.innerHTML = `
    <h2>Weather in ${cityName}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Condition: ${weatherDescription}</p>
    <img src="${weatherIcon}" alt="Weather icon" />
  `;
}
