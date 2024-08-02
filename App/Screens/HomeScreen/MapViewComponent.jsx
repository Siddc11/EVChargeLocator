import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewStyle from "../../Utils/MapViewStyle.json";
import { UserLocationContext } from "../../Context/UserLocationContext";

const MapViewComponent = () => {
  const { location, setLocation } = useContext(UserLocationContext);

  return (
    location?.latitude && (
      <View>
        <MapView
          style={styles.map}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          >
            <Image
             source={require('../../../assets/images/car.png')}
             style={{width: 60, height: 60}}
            />
          </Marker>
        </MapView>
      </View>
    )
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
