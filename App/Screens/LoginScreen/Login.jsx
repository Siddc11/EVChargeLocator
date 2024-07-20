import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import {useWarmUpBrowser} from '../../../hooks/useWarmUpBrowser'
WebBrowser.maybeCompleteAuthSession();

const Login = () => {

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop:25,
          paddingBottom: 10,
          marginBottom: 10
        }}
      >
        <Text style={styles.LogoText}>
          EV-STATION{" "}
          <Image
            source={require("./../../../assets/images/charging-station.png")}
            style={{ width: 50, height: 50 }}
          />
        </Text>
      </View>
      <View>
        <Image source={require('./../../../assets/images/evStation2.jpeg')}
        style={{width:'100%', height:'55%', borderRadius: 40, borderColor:'#8E3fff', borderWidth:1}}
        ></Image>
        <View style={{padding:10}}>
            <Text style={styles.heading}>Your Ultimate EV Charging Station Finder App</Text>
            <Text style={styles.subHeading}>Is your vehicle running out of charging ? then, find EV Charging Station near you...</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
           onPress={onPress}
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 5 }}
              source={require("./../../../assets/images/image.png")}
            />
            <Text style={{ color: "#c0fca9" }}>_.</Text>
            <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 20 }}>
             Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  LogoText: {
    fontSize: 30,
    fontFamily: "Outfit-Bold",
  },
  heading:{
    fontSize: 25,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
    marginTop: 20
  },
  subHeading:{
    fontSize: 16,
    fontFamily: "Outfit-Regular",
    textAlign: 'center',
    marginTop: 15
  }, 
  button: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius:99,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '#c0fca9'
  },
});
