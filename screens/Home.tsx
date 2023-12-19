import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Search from '../components/Search';
import Forecast from '../components/Forecast';
import ForecastWeek from '../components/ForecastWeek';

const {width, height} = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <Search />
      
      <Forecast />
      <ForecastWeek/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    marginBottom:10
  },
});