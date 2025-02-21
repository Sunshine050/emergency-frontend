import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Nearby Hospitals" onPress={() => navigation.navigate("Nearby")} />
      <Button title="Notifications" onPress={() => navigation.navigate("Notifications")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
      <Button title="SOS" onPress={() => navigation.navigate("SOS")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default HomeScreen;
