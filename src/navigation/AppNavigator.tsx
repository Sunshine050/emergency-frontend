import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // ใช้เก็บค่า
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import NearbyScreen from "../screens/Nearby/NearbyScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SosScreen from "../screens/SOS/SosScreen";
import RequestStatusScreen from "../screens/SOS/RequestStatusScreen";
import ProfileInfo from "../screens/Profile/ProfileInfo"; // ✅ เพิ่ม ProfileInfo

// Import Onboarding Screens
import OnboardingScreen1 from "../screens/Onboarding/OnboardingScreen1";
import OnboardingScreen2 from "../screens/Onboarding/OnboardingScreen2";
import OnboardingScreen3 from "../screens/Onboarding/OnboardingScreen3";

export type RootStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Nearby: undefined;
  NotificationScreen: undefined;
  Profile: undefined;
  ProfileInfo: undefined; 
  SOS: undefined;
  RequestStatusScreen: undefined;
  HospitalDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem("hasSeenOnboarding");
        if (value === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasSeenOnboarding", "true"); // บันทึกค่าไว้
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null; // แสดงหน้าเปล่าระหว่างโหลดค่า
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch ? (
          <>
            <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
            <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
            <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Nearby" component={NearbyScreen} />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProfileInfo" component={ProfileInfo} /> 
            <Stack.Screen name="SOS" component={SosScreen} />
            <Stack.Screen name="RequestStatusScreen" component={RequestStatusScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );  
};

export default AppNavigator;
