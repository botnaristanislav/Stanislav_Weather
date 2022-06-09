const cityForm = document.querySelector('form');
const textUI = document.querySelector('.details');
const img = document.querySelector('img');
const icon = document.querySelector('.icon');
let userCity = '';





// async func to get all data
const updateCity = async (city) => {

  console.log(userCity)
  // calling the async functions into vars
  const cityData = await getLocation(userCity);
  const weatherData = await getWeather(cityData.Key);

  // returning the vars into a object
  return {
    cityDets: cityData,
    weather: weatherData
  };
}


// event listener to form for submit event
cityForm.addEventListener('submit', e => {
  // preventing refresh
  e.preventDefault();
  // pushing the value into var
  userCity = e.target.city.value.trim();
  // calling the async updateCity(submitValue)
  updateCity(userCity)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // resetting the form
  cityForm.reset();
});

//-----------Now we have all data let's update UI!=>
const updateUI = ((data) => {
  // logging to console(temporary/delete)
  console.log(data);
  // saving city and weather dets in separate vars
  let cityDets = data.cityDets;
  let weather = data.weather;
  // changing html text to correspond
  textUI.innerHTML = `
   <h5 class="my-3">${cityDets.EnglishName}</h5>
   <div class="my-3">${weather.WeatherText}</div>
   <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>°C</span>
            </div>
  `;
  //removing class that hides photo
  img.classList.remove("d-none");
  // adding photo to correspond day or night('ternary operator' way)
  img.src = weather.IsDayTime ? 'photos/day.svg' : 'photos/night.svg';
  // adding icon to correspond "WeatherIcon"
  icon.children[0].src = `photos/icons/${weather.WeatherIcon}.svg`;
  //adding CSS class to match our styles to icon
  icon.classList.add("my-icon");




});
