import {
  StyleSheet,
  Text,
  View,
  TextInput,
  
  Dimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {MagnifyingGlassIcon, XMarkIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {fetchLocations} from '../API/WeatherAPI';
import {debounce} from 'lodash';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {updateLocation} from '../redux/locationSlice';
import {getData, storeData} from './LocalStorage';



const {width, height} = Dimensions.get('window');

export default function Search() {
  const [showSearch, toggleSearch] = useState(false);
  const [location, setLocation] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState('');
  const dispatch = useDispatch();


  const handleLocation = loc => {
    console.log('location:', loc.name);
    setSelectedLoc(`${loc?.name}, ${loc?.country}`);
    dispatch(updateLocation({city: loc?.name, country: loc?.country}));
    storeData('city', loc.name);
    storeData('country', loc.country);

  };



  const handleSearch = value => {
    if (value.length > 0) {
      fetchLocations({cityName: value}).then(data => {
        setLocation(data);
        console.log(data);
      });
    }
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View
      style={{
        zIndex: 50,
        elevation: Platform.OS === 'android' ? 50 : 0,
        marginHorizontal: 10,
        height: 'auto',
        position: 'relative',
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
            onChangeText={handleTextDebounce}
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
          {showSearch ? (
            <XMarkIcon height="100%" color="white" />
          ) : (
            <MagnifyingGlassIcon color="white" height="95%" />
          )}
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
                  {loc?.name}, {loc?.country}
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
