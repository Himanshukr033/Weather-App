import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';

import React from 'react';
import Home from './screens/Home';

const {width, height} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function App() {
  return (
    <View style={{flex:1, position: 'relative'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        blurRadius={70}
        source={require('./Assets/bg.png')}
        style={styles.image}
      />

      <SafeAreaView style={styles.statusBar}>
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: height + statusBarHeight,
    width: width,
    position: 'absolute',
  },
  statusBar: {
    display: 'flex',
    flex: 1,
    marginTop: Platform.OS === 'android' ? statusBarHeight + 10 : 0,
  },
});
