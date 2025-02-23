import React, { useEffect, useState } from "react";
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
import OnboardingScreen1 from "./screens/Onboarding/OnboardingScreen1";
import OnboardingScreen2 from "./screens/Onboarding/OnboardingScreen2";
import OnboardingScreen3 from "./screens/Onboarding/OnboardingScreen3";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // คอมเมนต์ออกชั่วคราว

const Stack = createStackNavigator();

const App = () => {
  // const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  // useEffect(() => {
  //   const checkFirstLaunch = async () => {
  //     const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");
  //     setIsFirstLaunch(hasSeenOnboarding === null);
  //   };

  //   checkFirstLaunch();
  // }, []);

  // if (isFirstLaunch === null) {
  //   return null; // รอโหลดค่า
  // }

  // const markOnboardingCompleted = async () => {
  //   await AsyncStorage.setItem("hasSeenOnboarding", "true");
  //   setIsFirstLaunch(false); // หลังจากผ่าน Onboarding ให้ไปหน้า Login
  // };

  return (
    <NavigationContainer>
      {/* กำหนดให้เริ่มที่ Onboarding1 ตลอด */}
      <Stack.Navigator initialRouteName="Onboarding1">
        <Stack.Screen 
          name="Onboarding1" 
          component={OnboardingScreen1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding2" 
          component={OnboardingScreen2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Onboarding3" 
          component={OnboardingScreen3} 
          options={{ headerShown: false }} 
        />
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
