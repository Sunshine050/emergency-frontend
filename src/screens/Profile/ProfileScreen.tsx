import { Button, View } from "react-native";

import React from 'react';
import { Text, StyleSheet } from "react-native";
// import { Button, View } from "react-native";
import { NavigationProp } from '@react-navigation/native';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
    </View>
  );
}