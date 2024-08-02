import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MapView from 'react-native-maps';
import MapViewStyle from '../../Utils/MapViewStyle.json'

const MapViewComponent = () => {
  return (
    <View>
         <MapView 
         style={styles.map} 
         showsUserLocation={true}
         customMapStyle={MapViewStyle}
         />
    </View>
  )
}

export default MapViewComponent

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
      },
})