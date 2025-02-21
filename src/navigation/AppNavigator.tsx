import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import NearbyScreen from "../screens/Nearby/NearbyScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import SosScreen from "../screens/SOS/SosScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Nearby: undefined;
  Notifications: undefined;
  Profile: undefined;
  SOS: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nearby" component={NearbyScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SOS" component={SosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
