import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password_1, setPassword_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSignUp = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password_1}
        onChangeText={setPassword_1}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your Password"
        value={password_2}
        onChangeText={setPassword_2}
        secureTextEntry
      />

      {errorText.length > 0 && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}

      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
        <Text style={styles.signUpBtnText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.toSignInText}>
        Already have an account?{" "}
        <Text
          style={styles.toSignInLink}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
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
  signUpBtn: {
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

export default RegisterScreen;
