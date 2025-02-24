import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const userName = 'John Doe';

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("User Logged Out") }
      ]
    );
  };

  const menuItems = [
    { label: "Profile", icon: "user", onPress: () => console.log("Profile clicked") },
    { label: "Payment Method", icon: "credit-card", onPress: () => console.log("Payment clicked") },
    { label: "Privacy Policy", icon: "shield", onPress: () => console.log("Privacy clicked") },
    { label: "Settings", icon: "cog", onPress: () => console.log("Settings clicked") },
    { label: "Help", icon: "question-circle", onPress: () => console.log("Help clicked") },
    { label: "Logout", icon: "sign-out", onPress: handleLogout }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>
      
      <View style={styles.profileContainer}>
        <View style={styles.profilePlaceholder}>
          <Icon name="user" size={50} color="#bbb" />
        </View>
        <Text style={styles.profileName}>{userName}</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={item.onPress}>
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

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 50, backgroundColor: '#fff' },
  headerText: { fontSize: 18, fontWeight: 'bold', color: '#4A90E2' },
  profileContainer: { alignItems: 'center', marginTop: 20 },
  profilePlaceholder: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: '#FFD700'
  },
  profileName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#000' },
  menuList: { width: '90%', marginTop: 20 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 15,
    borderBottomWidth: 1, borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9', borderRadius: 10, paddingHorizontal: 10
  },
  menuText: { flex: 1, fontSize: 16, marginLeft: 15, color: '#333' },
  chevron: { marginRight: 10 }
});
