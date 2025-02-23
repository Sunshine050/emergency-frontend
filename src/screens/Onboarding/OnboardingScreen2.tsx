import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen3 from './OnboardingScreen3';

const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/onboarding2.png')} style={styles.image} /> */}
      <Text style={styles.title}>Emergency Services</Text>
      <Text style={styles.description}>Quickly contact emergency numbers and hospitals near you.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding3' as never)} style={styles.button}>
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
  button: { backgroundColor: '#ff6b81', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default OnboardingScreen2;