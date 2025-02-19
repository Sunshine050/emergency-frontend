import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface SosScreenProps {
  navigation: NavigationProp<any>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export function SosScreen({ navigation }: SosScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS Screen</Text>
      <Button title="Confirm SOS" onPress={() => navigation.navigate("SosConfirm")} />
    </View>
  );
}