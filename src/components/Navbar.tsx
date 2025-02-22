import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // ใช้ FontAwesome
import { useNavigation, useRoute } from '@react-navigation/native'; // ใช้ hook ใหม่

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute(); // ใช้ route แทน state

  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home' as never)} 
        style={styles.navItem}>
        <FontAwesome 
          name="home" 
          size={26} 
          color={route.name === 'Home' ? '#146083' : '#fff'} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('SOS' as never)} 
        style={styles.navItem}>
        <FontAwesome 
          name="warning" 
          size={26} 
          color={route.name === 'SOS' ? '#146083' : '#fff'} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Nearby' as never)} 
        style={styles.navItem}>
        <FontAwesome 
          name="search" 
          size={26} 
          color={route.name === 'Nearby' ? '#146083' : '#fff'} 
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Profile' as never)} 
        style={styles.navItem}>
        <FontAwesome 
          name="user" 
          size={26} 
          color={route.name === 'Profile' ? '#146083' : '#fff'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',  
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 12,
  },
});

export default Navbar;
