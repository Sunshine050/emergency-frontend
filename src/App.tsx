import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import NearbyScreen from "./screens/Nearby/NearbyScreen";
import NotificationScreen from "./screens/Notifications/NotificationScreen";
import ProfileScreen from './screens/Profile/ProfileScreen';
import SosScreen from "./screens/SOS/SosScreen";
import RequestStatusScreen from "./screens/SOS/RequestStatusScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name="Nearby" component={NearbyScreen} options={{ title: "Nearby Places" }} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{ title: "Notifications" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
        <Stack.Screen name="SOS" component={SosScreen} options={{ title: "SOS" }} />
        <Stack.Screen name="RequestStatus" component={RequestStatusScreen} options={{ title: "Request Status" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
