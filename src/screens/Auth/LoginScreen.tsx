import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // FontAwesome Import
import { CommonActions } from "@react-navigation/native";

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    // สามารถเพิ่มการตรวจสอบข้อมูลหรือการล็อกอินที่นี่
    navigation.dispatch(
      // no going back
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
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
      <Text
        style={styles.toRocoveryLink}
        onPress={() => navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialBtnsRow}>
        <TouchableOpacity style={styles.socialBtn}>
          {/* เปลี่ยนเป็นไอคอนที่รองรับใน FontAwesome */}
          <FontAwesome name="apple" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
      </View>

      <Text style={styles.toSignUpText}>
        Don't have an account?{" "}
        <Text
          style={styles.toSignUpLink}
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
  loginBtn: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginBtnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  orText: { marginTop: 20, marginBottom: 10, color: "#888" },
  socialBtnsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialBtn: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    aspectRatio: 1,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  toSignUpText: { marginTop: 20, fontSize: 14 },
  toSignUpLink: { color: "#007BFF", fontWeight: "bold" },
  toRocoveryLink: {
    width: "100%",
    color: "#007BFF",
    fontWeight: "bold",
    textAlign: "right",
    marginEnd: 18,
    marginBottom: 10,
  },
});

export default LoginScreen;
