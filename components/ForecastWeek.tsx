import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CalendarDaysIcon} from 'react-native-heroicons/solid';

export default function ForecastWeek() {
  const [days, setDay] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday',
  ]);
  return (
    <View style={{rowGap: 5, marginHorizontal: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
        <CalendarDaysIcon size="22" color="white" />
        <Text>Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}>
        {days.map(day => {
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
              }} key={day}>
              <Image
                source={require('../Assets/heavyrain.png')}
                style={{height: 40, width: 40}}
              />
              <Text>{day}</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}> 13&#176;</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
