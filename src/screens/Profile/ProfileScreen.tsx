import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Navbar from '../../components/Navbar'; // Import Navbar

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
      
      {/* Include the Navbar */}
      <Navbar navigation={navigation} />
    </View>
  );
}
