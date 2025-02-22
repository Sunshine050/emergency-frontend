import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "../../components/Navbar";
import HomeScreen from "../Home/HomeScreen";
import SosScreen from "../SOS/SosScreen";
import NearbyScreen from "../Nearby/NearbyScreen";
import NotificationScreen from "../Notifications/NotificationScreen";
import ProfileScreen from "../Profile/ProfileScreen";
import LoginScreen from "../Auth/LoginScreen";
import RegisterScreen from "../Auth/RegisterScreen";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const RootLayout = () => {
  const navigation = useNavigation();
  const state = navigation.getState();
  const currentRoute = state?.routes[state.index].name;

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for Login
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Hide header for Register
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Nearby"
          component={NearbyScreen}
          options={{ title: "Nearby Places",headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{ title: "Notifications" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="SOS"
          component={SosScreen}
          options={{ title: "SOS" }}
        />
      </Stack.Navigator>

      {/* Hide Navbar on Login and Register screens */}
      {currentRoute !== "Login" && currentRoute !== "Register" && <Navbar />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootLayout;
