import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // FontAwesome Import

const NewPasswordScreen = ({ navigation }: any) => {
  const [password_1, setPassword_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [errorText, setErrorText] = useState("");

  const submit = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
      <TextInput
        style={styles.input}
        value={password_1}
        onChangeText={setPassword_1}
        placeholder="Enter your New Password"
      />
      <TextInput
        style={styles.input}
        value={password_2}
        onChangeText={setPassword_2}
        placeholder="Comfirm your New Password"
      />

      {errorText.length > 0 && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}

      <TouchableOpacity style={styles.loginBtn} onPress={submit}>
        <Text style={styles.signUpBtnText}>Submit</Text>
      </TouchableOpacity>
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
  signUpBtnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  toSignInText: { marginTop: 20, fontSize: 14 },
  toSignInLink: { color: "#007BFF", fontWeight: "bold" },
  errorText: {
    width: "100%",
    color: "#e74c3c",
    textAlign: "left",
    marginStart: 12,
    marginBottom: 16,
  },
});

export default NewPasswordScreen;
