import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // FontAwesome Import

const RecoveryScreen = ({ navigation }: any) => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [errorText, setErrorText] = useState("");

  const getCode = () => {};
  const submit = () => {
    navigation.navigate("NewPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
      <TextInput
        style={[styles.input, { marginBottom: 16 }]}
        placeholder="Enter your Email or Phone Number"
        value={text}
        onChangeText={setText}
      />
      <View style={[styles.codeRow, { marginBottom: 16 }]}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          value={code}
          onChangeText={setCode}
        />
        <TouchableOpacity style={styles.codeBtn} onPress={getCode}>
          <Text style={styles.submitBtnText}>Get Code</Text>
        </TouchableOpacity>
      </View>
      {errorText.length > 0 && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}

      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.submitBtnText}>Continue</Text>
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
    flexShrink: 1,
    width: "100%",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: "#ccc",
  },
  submitBtn: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  submitBtnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  codeRow: {
    // width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  codeBtn: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    width: "100%",
    color: "#e74c3c",
    textAlign: "left",
    marginStart: 12,
    marginBottom: 16,
  },
});

export default RecoveryScreen;
