import {createSlice} from '@reduxjs/toolkit';
import {getData} from '../components/LocalStorage';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    City: 'Delhi',
    Country: 'India',
    weatherData: {}, // New property to store the latest API information
  },
  reducers: {
    updateLocation: (state, action) => {
      state.City = action.payload.city;
      state.Country = action.payload.country;
    },
    updateWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const {updateLocation, updateWeatherData} = locationSlice.actions;

export default locationSlice.reducer;

