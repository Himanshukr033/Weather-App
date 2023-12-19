import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CalendarDaysIcon} from 'react-native-heroicons/solid';
import {weatherImages} from './Constant';
import {useSelector} from 'react-redux';

export default function ForecastWeek() {
  const weather = useSelector(state => state.location.weatherData);
  const {location, current} = weather;
  return (
    <View
      style={{
        rowGap: 5,
        marginHorizontal: 15,
        zIndex: 0,
        position: 'relative',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
        <CalendarDaysIcon size="22" color="white" />
        <Text>Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}>
        {weather?.forecast?.forecastday?.map((item, index) => {
          const date = new Date(item.date);
          const options = {weekday: 'long'};
          let dayName = date.toLocaleDateString('en-US', options);
          dayName = dayName.split(',')[0];
          return (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                paddingVertical: 4,
                marginHorizontal: 5,
                rowGap: 2,
                width: 75,
              }}
              key={dayName}>
              <Image
                source={
                  weatherImages[item?.day?.condition?.text] ||
                  require('../Assets/mist.png')
                }
                style={{height: 40, width: 40}}
              />

              <Text>{dayName}</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {' '}
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
