import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; // ใช้เก็บค่า

// Tab Navigator
import TabNavigator from "./TabNavigator";

// Screens
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import RecoveryScreen from "../screens/Auth/recovery/RecoveryScreen";
import NewPasswordScreen from "../screens/Auth/recovery/NewPasswordScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import RequestStatusScreen from "../screens/SOS/RequestStatusScreen";
import ProfileInfo from "../screens/Profile/ProfileInfo"; 

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
  Recovery: undefined;
  NewPassword: undefined;
  Home: undefined;
  NotificationScreen: undefined;
  RequestStatusScreen: undefined;
  ProfileInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  AsyncStorage.clear(); // for dev: force show onboarding
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem("hasSeenOnboarding");
        if (value === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasSeenOnboarding", "true"); 
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
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? "Onboarding1" : "Login"} // เช็คว่าเคยเห็น Onboarding ไหม
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Recovery" component={RecoveryScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="RequestStatusScreen"
        component={RequestStatusScreen}
      />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
