// API key to access server's data
const key = 'kzTjGsKXg7JXkt4sG07zTGa9aZxWKFka';

// async function to get location API

const getLocation = async (city) => {

// creating base with query
  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;
// fetching data(base+query) with await and formatting to data we can use.
  const response = await fetch(base + query);
  const data = await response.json();
// returning data
  return data[0];

};

// async func to get weather
const getWeather = async (cityKey) => {


  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityKey}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  // returning data
  return data[0];
}


// // calling the async function(getLocation) and storing key!
// getLocation()
//   .then(data =>{
//     return getWeather(data.Key)
//   }).then(data => console.log(data))
//   .catch(err => console.log(err));
