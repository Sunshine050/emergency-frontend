import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/onboarding3.png')} style={styles.image} /> */}
      <Text style={styles.title}>Sign Up Now</Text>
      <Text style={styles.description}>Create an account to access emergency services and stay safe.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login' as never)} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' },
  image: { width: 300, height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 30 },
  button: { backgroundColor: '#1e90ff', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default OnboardingScreen3;
