import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
export default function Forecast() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        London,
        <Text style={styles.grayText}> United Kingdom</Text>
      </Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={require('../Assets/heavyrain.png')}
          style={styles.image}
        />
      </View>

      <View>
        <Text style={{fontWeight:'bold', textAlign:'center', marginLeft:10, fontSize:50}}>23&#176;</Text>
        <Text style={{letterSpacing:1.5 ,textAlign:'center', fontSize:18}}>Raining</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between', width:'80%'}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
            <Image source={require('../Assets/wind.png')}   style={styles.icon}/>
            <Text style={{fontSize:14}}>22km</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
            <Image source={require('../Assets/drop.png')}   style={styles.icon}/>
            <Text style={{fontSize:14}}>23%</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
            <Image source={require('../Assets/sun.png')}   style={styles.icon}/>
            <Text style={{fontSize:14}}>6:05 AM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent:'space-around',
    flex:1
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 26,
  },
  grayText: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 20,
  },
  image: {
    width: 0.5*width,
    aspectRatio:1,
  },
  icon:{
    tintColor:'white',
    height:20,
    width:20

  }
});
