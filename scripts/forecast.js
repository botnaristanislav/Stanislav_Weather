// setting up Forecast class
class Forecast{
constructor(){
  this.key = 'kzTjGsKXg7JXkt4sG07zTGa9aZxWKFka';
  this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
}



  async getLocation(city){
    const query = `${this.cityURL}?apikey=${this.key}&q=${city}`;
  // fetching data(base+query) with await and formatting to data we can use.
    const response = await fetch(query);
    const data = await response.json();
  // returning data
    return data[0];
  }

  async getWeather(cityKey){
    const query = `${this.weatherURL}${cityKey}?apikey=${this.key}`;

    const response = await fetch(query);
    const data = await response.json();
    // returning data
    return data[0];
  }

  async updateCity(userCity){
    // calling the async functions below
    const cityData = await this.getLocation(userCity);
    const weatherData = await this.getWeather(cityData.Key);
    // returning data
    return {
      cityDets: cityData,
      weather: weatherData
    };

};
};
