import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    <View key={item.id} style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Icon name="trash-outline" size={22} color="#D9534F" />
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
    padding: 10,
    marginTop: 80,
    backgroundColor: '#EAF2F8',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#2f1a95',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
    borderWidth: 0.5,
    borderColor: '#E1E8EB',
    marginTop: 5,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
    lineHeight: 24,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#FFF1F1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
});

export default NotificationScreen;
