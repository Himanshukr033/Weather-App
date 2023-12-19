import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {weatherImages} from './Constant';
import {useSelector} from 'react-redux';
import {fetchWeatherForecast} from '../API/WeatherAPI';
import {useDispatch} from 'react-redux';
import {updateLocation, updateWeatherData} from '../redux/locationSlice';
import {getData} from './LocalStorage';


export default function Forecast() {
  const {City, Country} = useSelector(state => state.location);
  const weather = useSelector(state => state.location.weatherData);
  const dispatch = useDispatch();

  const handleWeather = () => {
    fetchWeatherForecast({
      cityName: City,
      days: '7',
    }).then(data => {
      dispatch(updateWeatherData(data));
    });
  };
  useEffect(() => {
    handleWeather();
  }, [City]);

  // const initializeAsyncData = async () => {
  //   const defaultCity = await getData('city');
  //   const defaultCountry = await getData('country');
  //   if (defaultCity && defaultCountry) {
  //     dispatch(updateLocation({City: defaultCity, Country: defaultCountry}));
  //   }
  // };
  // useEffect(()=>{
  //   initializeAsyncData();
  // },[]);

  


  const {location, current} = weather;

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        {City},<Text style={styles.grayText}> {Country}</Text>
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={weatherImages[current?.condition?.text || 'other']}
          style={styles.image}
        />
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: 10,
            fontSize: 50,
          }}>
          {current?.temp_c}&#176;
        </Text>
        <Text style={{letterSpacing: 1.5, textAlign: 'center', fontSize: 18}}>
          {current?.condition?.text}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image source={require('../Assets/wind.png')} style={styles.icon} />
          <Text style={{fontSize: 14}}>{current?.wind_kph}km</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image source={require('../Assets/drop.png')} style={styles.icon} />
          <Text style={{fontSize: 14}}>{current?.humidity}%</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image source={require('../Assets/sun.png')} style={styles.icon} />
          <Text style={{fontSize: 14}}>
            {' '}
            {weather?.forecast?.forecastday[0]?.astro?.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    zIndex: 0,
    position: 'relative',
    elevation: Platform.OS === 'android' ? 0 : 0,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 26,
    zIndex: 0,
  },
  grayText: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 20,
    zIndex: 0,
  },
  image: {
    width: 0.5 * width,
    aspectRatio: 1,
    zIndex: -1,
  },
  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
    zIndex: -1,
  },
});
