import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "../../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

// กำหนดชนิดของ navigation
type RootStackParamList = {
  Login: undefined;
  ProfileInfo: undefined;
};
type NavigationProps = StackNavigationProp<RootStackParamList, "Login">;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProps>();
  const userName = "John Doe";

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogout = async () => {
    Alert.alert("Confirm Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        onPress: async () => {
          await AsyncStorage.removeItem("userToken");
          navigation.navigate("Login");
        },
      },
    ]);
  };

  const menuItems = [
    {
      label: "Profile Info",
      icon: "user",
      onPress: () => navigation.navigate("ProfileInfo"),
    },
    {
      label: "Payment Method",
      icon: "credit-card",
      onPress: () => console.log("Payment clicked"),
    },
    {
      label: "Privacy Policy",
      icon: "shield",
      onPress: () => console.log("Privacy clicked"),
    },
    {
      label: "Settings",
      icon: "cog",
      onPress: () => console.log("Settings clicked"),
    },
    {
      label: "Help",
      icon: "question-circle",
      onPress: () => console.log("Help clicked"),
    },
    { label: "Logout", icon: "sign-out", onPress: handleLogout },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>

      <View style={styles.profileContainer}>
        <View style={styles.profilePlaceholder}>
          <Icon name="user" size={50} color="#4A90E2" />
        </View>
        <Text style={styles.profileName}>{userName}</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <Icon name={item.icon} size={23} color="#4A90E2" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon
              name="chevron-right"
              size={20}
              color="#ccc"
              style={styles.chevron}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* <Navbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFD700",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  menuList: {
    width: "90%",
    marginTop: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
  chevron: {
    marginRight: 10,
  },
});
