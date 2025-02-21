import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Notification Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: '#ef4111',
          borderRadius: 20,
          padding: 10,
        }}
      >
        <FontAwesome name="bell" size={18} color="#fff" />
      </TouchableOpacity>
      {/* Content */}
      <Text style={styles.title}>เบอร์ติดต่ออื่นๆ</Text>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navItem}>
          <FontAwesome name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SOS")} style={styles.navItem}>
          <FontAwesome name="warning" size={24} color="#fff" />
          <Text style={styles.navText}>SOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Nearby")} style={styles.navItem}>
          <FontAwesome name="search" size={24} color="#fff" />
          <Text style={styles.navText}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.navItem}>
          <FontAwesome name="user" size={24} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", padding: 30, backgroundColor: "#f4f4f4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%", // กระจายให้ 4 ปุ่มพอดีกัน
  },
  navText: {
    color: "#fff",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomeScreen;
