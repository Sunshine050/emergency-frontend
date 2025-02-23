import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/Navbar';

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const [profileImage, setProfileImage] = useState(null);
  const userName = 'John Doe';

  useLayoutEffect(() => {
    // Hide the header and back button
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>My Profile</Text>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profilePic} />
        ) : (
          <View style={styles.profilePlaceholder}>
            <Icon name="user" size={50} color="#bbb" />
          </View>
        )}
        <Text style={styles.profileName}>{userName}</Text>
      </View>

      {/* Menu List */}
      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Icon name={item.icon} size={23} color="#4A90E2" />
            <Text style={styles.menuText}>{item.label}</Text>
            <Icon name="chevron-right" size={20} color="#ccc" style={styles.chevron} />
          </TouchableOpacity>
        ))}
      </View>
      <Navbar /> 
    </View>
  );
}
const menuItems = [
  { label: 'Profile', icon: 'user' },
  { label: 'Payment Method', icon: 'credit-card' },
  { label: 'Privacy Policy', icon: 'shield' },
  { label: 'Settings', icon: 'cog' },
  { label: 'Help', icon: 'question-circle' },
  { label: 'Logout', icon: 'sign-out' },
];

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 50 },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#4A90E2' },
  profileContainer: { alignItems: 'center', marginTop: 20 },
  profilePic: { width: 80, height: 80, borderRadius: 40 },
  profilePlaceholder: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center'
  },
  profileName: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  menuList: { width: '90%', marginTop: 20 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: '#eee'
  },
  menuText: { flex: 1, fontSize: 16, marginLeft: 15 },
  chevron: { marginRight: 10 }
});
