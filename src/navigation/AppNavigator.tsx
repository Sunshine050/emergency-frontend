import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import NearbyScreen from "../screens/Nearby/NearbyScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SosScreen from "../screens/SOS/SosScreen";
import RequestStatusScreen from "../screens/SOS/RequestStatusScreen";

// กำหนดประเภทของพารามิเตอร์ที่ใช้ในแต่ละหน้าจอ
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Nearby: undefined;
  NotificationScreen: undefined;
  Profile: undefined;
  SOS: undefined;
  RequestStatusScreen: undefined;
  HospitalDetail: undefined; // เพิ่มประเภทของ param สำหรับ HospitalDetail
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // เริ่มต้นที่หน้า Home
        screenOptions={{ headerShown: false }} // ปิด header สำหรับทุกหน้าจอ
      >
        {/* กำหนดหน้าต่างๆ สำหรับแอปพลิเคชัน */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nearby" component={NearbyScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SOS" component={SosScreen} />
        <Stack.Screen name="RequestStatusScreen" component={RequestStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
