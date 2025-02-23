import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen2 from './OnboardingScreen2';

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/onboarding1.png')} style={styles.image} /> */}
      <Text style={styles.title}>Welcome to Emergency Care</Text>
      <Text style={styles.description}>Get instant help in case of an emergency.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding2' as never)} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' },
  image: { width: 300, height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 30 },
  button: { backgroundColor: '#ff4757', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default OnboardingScreen1;