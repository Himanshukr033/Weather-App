import axios from 'axios';
import Config from 'react-native-config';

const apiKey = '2cacdcdb70d54f9da9d185013232106';
console.log(apiKey);
const forecastEndpoint = params =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint = params =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;
const apiCall = async endpoint => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

export const fetchWeatherForecast = params => {
  let forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = params => {
  let locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};
