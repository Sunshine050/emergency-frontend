import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

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
        { text: 'ลบ', onPress: () => setNotificationList(notificationList.filter(item => item.id !== id)) }
      ]
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteText}>ลบ</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  notificationMessage: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontSize: 14,
  },
});

export default NotificationScreen;
