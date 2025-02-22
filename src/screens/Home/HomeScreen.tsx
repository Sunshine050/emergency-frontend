import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';

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
              uri: 'data:image/jpeg;base64,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',
            }}
            style={[
              styles.profileImage, 
              { 
                padding: 10, 
                marginLeft: 20, 
                borderWidth: 2, 
                borderColor: 'rgba(0, 0, 0, 0.2)',  
                shadowColor: '#000',  
                shadowOffset: { width: 0, height: 2 },  
                shadowOpacity: 0.3,  
                shadowRadius: 6,  
              }
            ]}
            
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.title}>เบอร์ติดต่อฉุกเฉิน</Text>,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.notificationContainer}>
          <FontAwesome name="bell" size={24} color="#a59090" />
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
          contentContainerStyle={{ paddingBottom: 70 }} // เพิ่มพื้นที่ว่างด้านล่าง
        />
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
  notificationContainer: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#909ca0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
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
