import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';

import {Provider} from 'react-redux';
import store from './redux/store';
const {width, height} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, position: 'relative'}}>
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
      </GestureHandlerRootView>
    </Provider>
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
