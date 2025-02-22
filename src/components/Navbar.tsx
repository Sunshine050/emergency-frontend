import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  SOS: undefined;
  Nearby: undefined;
  Profile: undefined;
};

const Navbar = () => {
  // ประกาศประเภทของ navigation
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const state = navigation.getState();
  const currentRoute = state?.routes[state.index]?.name;

  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
        style={[styles.navItem, currentRoute === 'Home' && styles.navItemActive]}>
        <FontAwesome name="home" size={26} color={currentRoute === 'Home' ? '#146083' : '#fff'} />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('SOS')} 
        style={[styles.navItem, currentRoute === 'SOS' && styles.navItemActive]}>
        <FontAwesome name="warning" size={26} color={currentRoute === 'SOS' ? '#146083' : '#fff'} />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Nearby')} 
        style={[styles.navItem, currentRoute === 'Nearby' && styles.navItemActive]}>
        <FontAwesome name="search" size={26} color={currentRoute === 'Nearby' ? '#146083' : '#fff'} />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Profile')} 
        style={[styles.navItem, currentRoute === 'Profile' && styles.navItemActive]}>
        <FontAwesome name="user" size={26} color={currentRoute === 'Profile' ? '#146083' : '#fff'} />
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
    width: '25%',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 12,
  },
  navItemActive: {
    backgroundColor: '#1a1a1a', 
    paddingVertical: 10,
    borderRadius: 15,
  },
});

export default Navbar;
