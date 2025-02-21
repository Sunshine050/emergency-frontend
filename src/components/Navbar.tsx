// components/Navbar.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = ({ navigation }: any) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
        <FontAwesome name="home" size={24} color="#fff" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SOS')} style={styles.navItem}>
        <FontAwesome name="warning" size={24} color="#fff" />
        <Text style={styles.navText}>SOS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Nearby')} style={styles.navItem}>
        <FontAwesome name="search" size={24} color="#fff" />
        <Text style={styles.navText}>Nearby</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
        <FontAwesome name="user" size={24} color="#fff" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000006',
    paddingVertical: 10,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    position: 'absolute',
    bottom: -2,
    left: 0,
    right: 0,
    elevation: 5,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  navText: {
    color: '#fff',
    marginTop: 1,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Navbar;
