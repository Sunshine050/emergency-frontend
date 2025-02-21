import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';
import Navbar from '../../components/Navbar';

const emergencyContacts = [
  { id: '1', name: 'โรงพยาบาลกรุงเทพ', icon: 'hospital-o', phone: '0938370338' },
  { id: '2', name: 'โรงพยาบาลศิริราช', icon: 'plus-square', phone: '02-419-7000' },
  { id: '3', name: 'โรงพยาบาลบำรุงราษฎร์', icon: 'medkit', phone: '02-011-2222' },
  { id: '4', name: 'โรงพยาบาลจุฬาลงกรณ์', icon: 'ambulance', phone: '02-256-4000' },
  { id: '5', name: 'โรงพยาบาลราชวิถี', icon: 'stethoscope', phone: '02-354-8108' },
  { id: '6', name: 'โรงพยาบาลตำรวจ', icon: 'phone', phone: '02-207-6000' },
  { id: '7', name: 'สายด่วนกู้ชีพ', icon: 'phone-square', phone: '1669' },
];

const HomeScreen = ({ navigation }: any) => {
  const [filteredData, setFilteredData] = useState(emergencyContacts);

  // ใช้ useLayoutEffect เพื่อลบปุ่มย้อนกลับออกจาก header และตั้งค่าให้ชื่ออยู่กลาง
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://scontent-bkk1-2.xx.fbcdn.net/v/t1.6435-9/160182782_484864579378509_5690293085961684533_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=GxVWjy9gl1oQ7kNvgHMy3eb&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AvSAFjvBD-Bjk18PgQIXlTM&oh=00_AYBJX9u1e7py0r64iqxQUXAnMTw710-8PvYLTi8mTJXcEQ&oe=67DFF619', // ใส่ URL ของภาพโปรไฟล์ที่ต้องการใช้
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      ), // ปุ่มโปรไฟล์อยู่ซ้าย
      headerTitle: () => <Text style={styles.title}>เบอร์ติดต่อฉุกเฉิน</Text>, // ใช้ headerTitle สำหรับคอมโพเนนต์ Text
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.notificationContainer}>
          <FontAwesome name="bell" size={24} color="#e44311" />
        </TouchableOpacity>
      ), // ปุ่มแจ้งเตือน
      headerTitleAlign: 'center', // จัดตำแหน่ง title ให้อยู่ตรงกลาง
    });
  }, [navigation]);

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleCall(item.phone)}>
      <FontAwesome name={item.icon as any} size={24} color="#0e0d0d" style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        {/* Search Bar */}
        <SearchBar data={emergencyContacts} setFilteredData={setFilteredData} />

        {/* รายการเบอร์ติดต่อ */}
        <FlatList data={filteredData} keyExtractor={(item) => item.id} renderItem={renderItem} />

        {/* Navbar */}
        <Navbar navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center', // จัดให้อยู่กลาง
    flex: 1,
    color: '#333',
    marginVertical: 10,
  },
  profileContainer: {
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationContainer: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#b7b6ab', // สีเบาๆ ให้ดูสดใส
    shadowColor: '#000', // เงา
    shadowOffset: { width: 0, height: 4 }, // เงา
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // สำหรับ Android
  },
  icon: { marginRight: 15 },
  info: { flex: 1 },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0d0c0c',
  },
  phone: {
    fontSize: 14,
    color: '#0d0c0c',
  },
});

export default HomeScreen;
