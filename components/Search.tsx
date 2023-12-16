import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';

const {width, height} = Dimensions.get('window');

export default function Search() {
  const [showSearch, toggleSearch] = useState(false);
  const [location, setLocation] = useState([1, 2, 3]);

  const handleLocation = loc => {
    console.log('location:', loc);
  };

  return (
    <View
      style={{
        zIndex: 50,
        marginHorizontal: 10,
        height:'auto'
      }}>
      <View
        style={{
          borderRadius: 100,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: showSearch
            ? 'rgba(255, 255, 255, 0.2)'
            : 'transparent',
          paddingLeft: 15,
          height: 0.08 * height,
        }}>
        {showSearch ? (
          <TextInput
            placeholder="Search City"
            placeholderTextColor="gray"
            style={{paddingLeft: 6, flex: 1, color: 'white'}}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            height: '82%',
            aspectRatio: 1,
            borderRadius: 100,
            padding: 3,
            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MagnifyingGlassIcon color="white" height="95%" />
        </TouchableOpacity>
      </View>
      {location.length > 0 && showSearch ? (
        <View
          style={{
            position: 'absolute',
            width: '96%',
            top: 0.085 * height,
            backgroundColor: 'white',
            borderRadius: 20,
            marginHorizontal: 8,
          }}>
          {location.map((loc, index) => {
            let borders = index + 1 != location.length;
            let borderClassName = borders ? styles.bottomBorder : '';
            return (
              <TouchableOpacity
                onPress={() => handleLocation(loc)}
                key={index}
                style={[
                  {
                    flexDirection: 'row',
                    margin: 0,
                    padding: 5,
                    margin: 2,
                  },
                  borderClassName,
                ]}>
                <MapPinIcon size="25" color="rgba(255, 0, 0, 0.43)" />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginLeft: 5,
                    fontWeight: '500',
                  }}>
                  {' '}
                  London Bridge
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 2,
    borderColor: 'gray',
  },
});
