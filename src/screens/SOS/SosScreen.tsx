import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS Emergency</Text>
      <Button title="Send SOS Alert" onPress={() => alert("SOS Sent!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "red" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "white" },
});

export default SosScreen;
