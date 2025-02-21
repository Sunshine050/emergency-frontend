import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Date of Birth (DD/MM/YYYY)" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Already have an account?{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>
          Log In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 12, borderColor: "#ccc" },
  button: { backgroundColor: "#007BFF", padding: 12, borderRadius: 8, width: "100%", alignItems: "center", marginTop: 10 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  registerText: { marginTop: 20, fontSize: 14 },
  linkText: { color: "#007BFF", fontWeight: "bold" },
});

export default RegisterScreen;
