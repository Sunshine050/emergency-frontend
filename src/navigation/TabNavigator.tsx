import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import SosScreen from "../screens/SOS/SosScreen";
import NearbyScreen from "../screens/Nearby/NearbyScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();
const SubStack = createStackNavigator();

const SubStackNavigator = () => {};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HOME") {
            iconName = "home";
            return <Entypo name={iconName as any} size={size} color={color} />;
          }
          if (route.name === "SOS") {
            iconName = "crisis-alert";
            return (
              <MaterialIcons name={iconName as any} size={size} color={color} />
            );
          }
          if (route.name === "NEARBY") {
            iconName = "crisis-alert";
            return (
              <MaterialIcons name={iconName as any} size={size} color={color} />
            );
          }
          if (route.name === "PROFILE") {
            iconName = focused ? "user-circle" : "user-circle-o";
            return (
              <FontAwesome name={iconName as any} size={size} color={color} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="SOS" component={SosScreen} />
      <Tab.Screen name="NEARBY" component={NearbyScreen} />
      <Tab.Screen name="PROFILE" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
