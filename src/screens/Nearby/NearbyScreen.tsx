import Navbar from '../../components/Navbar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NearbyScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Nearby Screen</Text>
      <Navbar navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default NearbyScreen;
