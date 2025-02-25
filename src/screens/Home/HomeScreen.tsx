import React, { useState, useEffect, useLayoutEffect } from 'react';
import { 
  View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, 
  KeyboardAvoidingView, Platform 
} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import SearchBar from '../../components/SearchbarHome/SearchBar';
import Navbar from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const API_URL = "https://my.api.mockaroo.com/Emergency_contacts?key=27fa01c0"; 


const HomeScreen: React.FC = () => {
  const [emergencyContacts, setEmergencyContacts] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const navigation = useNavigation();

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setEmergencyContacts(data);
        setFilteredData(data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.title}>เบอร์ติดต่อฉุกเฉิน</Text>,
      headerRight: () => (
        <TouchableOpacity style={styles.notificationIcon} onPress={() => navigation.navigate('Notifications' as never)}>
          <FontAwesome5 name="bell" size={24} color="#333" />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
      headerLeft: () => null, // ลบปุ่มย้อนกลับ
    });
  }, [navigation]);

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleCall(item.phone)}
      activeOpacity={0.8}  
    >
      <FontAwesome name={item.icon as any} size={24} color="#fff" style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>  
        <Text style={styles.phone}>{item.phone}</Text>  
      </View>
      <FontAwesome name="phone" size={24} color="#fff" style={styles.phoneIcon} />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <SearchBar data={emergencyContacts} setFilteredData={setFilteredData} />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 50 }} 
        />
      </View>
      <Navbar />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0c0c0c',
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
    backgroundColor: '#36679f',
    elevation: 4,
  },
  icon: { 
    marginRight: 15, 
  },
  info: { 
    flex: 1, 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  phone: {
    fontSize: 14,
    color: '#BBDEFB',
  },
  phoneIcon: { 
    marginLeft: 10, 
  },
});

export default HomeScreen;
