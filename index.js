const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');

const apiKey = 'f229865913ad96094ec71983d5a75d84';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

searchBtn.addEventListener('click', () => {
  const city = searchInput.value;

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to retrieve weather data. Please try again later.');
      }
      return response.json();
    })
    .then(data => {
      cityName.textContent = data.name;
      temp.textContent = `${(Math.round(data.main.temp)-273)}`;
      windSpeed.textContent = `${data.wind.speed} `;
      humidity.textContent = `${data.main.humidity}`;
    })
    .catch(error => {
      alert(error.message);
      console.log('Error:', error);
    });
});


