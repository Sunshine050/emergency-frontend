import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';
import Navbar from '../../components/Navbar';

const emergencyContacts = [
  { id: '1', name: 'สายด่วนช่วยเหลือสัตว์มีพิษ', icon: 'paw', phone: '1669' },
  { id: '2', name: 'ศูนย์พิษวิทยา', icon: 'user-md', phone: '02-257-1600' },
  { id: '3', name: 'สายด่วนน้ำท่วม', icon: 'tint', phone: '1125' },
  { id: '4', name: 'ธนาคารกรุงเทพ', icon: 'bank', phone: '1333' },
  { id: '5', name: 'ธนาคารไทยพาณิชย์', icon: 'bank', phone: '02-777-7777' },
  { id: '6', name: 'ธนาคารกสิกรไทย', icon: 'bank', phone: '02-888-8888' },
  { id: '7', name: 'สายด่วนตำรวจไซเบอร์', icon: 'shield-alt', phone: '02-141-2070' },
  { id: '8', name: 'กรมป้องกันและบรรเทาสาธารณภัย', icon: 'shield', phone: '1784' },
  { id: '9', name: 'หน่วยกู้ภัยน้ำท่วม', icon: 'ambulance', phone: '1669' },
  { id: '10', name: 'สายด่วนกู้ชีพ', icon: 'heart', phone: '1669' },
  { id: '11', name: 'ศูนย์ช่วยเหลือผู้บริโภค', icon: 'info-circle', phone: '1557' },
  { id: '12', name: 'ตำรวจท่องเที่ยว', icon: 'user', phone: '1155' },
  { id: '13', name: 'การไฟฟ้านครหลวง', icon: 'bolt', phone: '1130' },
  { id: '14', name: 'การท่องเที่ยวแห่งประเทศไทย', icon: 'globe', phone: '1672' },
  { id: '15', name: 'สายด่วนตำรวจ 191', icon: 'shield', phone: '191' },
  { id: '16', name: 'สายด่วนไฟฟ้าขัดข้อง', icon: 'fire', phone: '1199' },
  { id: '17', name: 'การประปานครหลวง', icon: 'tint', phone: '1125' },
  { id: '18', name: 'กรมเจ้าท่า', icon: 'anchor', phone: '1199' },
  { id: '19', name: 'ศูนย์พิษวิทยา', icon: 'user-md', phone: '02-257-1600' },
  { id: '20', name: 'กรมทางหลวง', icon: 'road', phone: '1586' },
];

const HomeScreen = ({ navigation }: any) => {
  const [filteredData, setFilteredData] = useState(emergencyContacts);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            source={{
              uri: '#',
            }}
            style={[styles.profileImage, { padding: 10, marginLeft: 20, borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.2)' }]}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.title}>เบอร์ติดต่อฉุกเฉิน</Text>,
      headerRight: () => (
        <TouchableOpacity style={styles.notificationIcon} onPress={() => navigation.navigate('Notifications')}>
          <FontAwesome5 name="bell" size={30} color="black" />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
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
      <FontAwesome name="phone" size={24} color="#0e0d0d" style={styles.phoneIcon} />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <SearchBar data={emergencyContacts} setFilteredData={setFilteredData} />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
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
    textAlign: 'center',
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
  notificationIcon: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#909ca0',
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
  phoneIcon: { marginLeft: 10 },
});

export default HomeScreen;
