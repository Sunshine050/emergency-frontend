import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // นำเข้าไอคอนจาก react-native-vector-icons

// Add the following line to declare the module
declare module 'react-native-vector-icons/Ionicons';

const notifications = [
  { id: '1', message: 'แจ้งเตือน: สายด่วนช่วยเหลือสัตว์มีพิษ 1669' },
  { id: '2', message: 'แจ้งเตือน: สายด่วนตำรวจ 191' },
  { id: '3', message: 'แจ้งเตือน: การไฟฟ้านครหลวง 1130' },
  { id: '4', message: 'แจ้งเตือน: ธนาคารกรุงเทพ 1333' },
];

const NotificationScreen: React.FC = () => {
  const [notificationList, setNotificationList] = useState(notifications);

  const handleDelete = (id: string) => {
    Alert.alert(
      'ยืนยันการลบ',
      'คุณต้องการลบการแจ้งเตือนนี้หรือไม่?',
      [
        { text: 'ยกเลิก' },
        { 
          text: 'ลบ', 
          onPress: () => setNotificationList(notificationList.filter(item => item.id !== id))
        }
      ]
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Icon name="trash-outline" size={20} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {notificationList.map((item) => renderItem({ item }))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  deleteButton: {
    marginLeft: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationScreen;
