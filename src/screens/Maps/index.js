import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Navigation from '../../Navigation/stack';
const Maps = ({ navigation }) => {
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [searchResult, setSearchResult] = useState('');
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocation(info));
    console.log(location)
    handleMapPress()
  }, [])
  const latitude = location?.coords?.latitude;
  const longitude = location?.coords?.longitude;
  // const handleMarkerDrag = (event) => {
  //   const { latitude, longitude } = event.coordinate;
  //   setMarkerCoordinates({ latitude, longitude });
  // };
  const handleMapPress = async (event) => {
    const { longitude, latitude } = event.nativeEvent.coordinate;
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    const response = await fetch(url);
    const data = await response.json()
    const address = data?.display_name;
    setSearchResult(address);
    setLat(data?.lat);
    setLon(data?.lon);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={handleMapPress}
      >
        <Marker coordinate={{ latitude, longitude }} draggable={true}
        />
      </MapView>
      {/* <BottomSheet
        keyboardAware
        bottomSheerColor="#FFFFFF"
        ref="BottomSheet"
        initialPosition={'50%'}
        snapPoints={['50%', '100%']}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={true}
        header={
          <View>
            <Text style={styles.text}>Header</Text>
          </View>
        }
        body={
          <View style={styles.body}>
            <Text style={styles.text}>Body</Text>
          </View>
        }
      /> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Home', { data: { searchResult } })}>
        <View style={{ backgroundColor: "white", elevation: 10, height: 40, width: "100%", justifyContent: "center" }}>
          <Text style={{ color: "black" }}>
            {searchResult}
          </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}
export default Maps