import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    // สามารถเพิ่มการตรวจสอบข้อมูลหรือการล็อกอินที่นี่
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Mobile Number"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>
        Don't have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  orText: { marginTop: 20, marginBottom: 10, color: "#888" },
  socialButtons: { flexDirection: "row", justifyContent: "center", gap: 20 },
  socialButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  registerText: { marginTop: 20, fontSize: 14 },
  linkText: { color: "#007BFF", fontWeight: "bold" },
});

export default LoginScreen;
