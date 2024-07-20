import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/HomeScreen/Home";
import Profile from "../Screens/ProfileScreen/Profile";
import Favourite from "../Screens/FavourtiteStationScreen/Favourite";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "green",
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, 
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarActiveTintColor: "green",
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, 
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: "green",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={25} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12, 
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
