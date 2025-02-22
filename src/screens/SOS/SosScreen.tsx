import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AssessmentPopup from '../../components/AssessmentPopup';
import IncidentPopup from '../../components/IncidentPopup';
import Navbar from '../../components/Navbar'; // import Navbar

const SosScreen = ({ navigation }: any) => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showIncident, setShowIncident] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false); // เพิ่มสถานะแจ้งเตือน

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSosPress = () => {
    setShowAssessment(true); // เปิดป๊อปอัพประเมินอาการ
  };

  const handleAssessmentComplete = () => {
    setShowAssessment(false);
    setShowIncident(true); // เปิดป๊อปอัพสถานการณ์อุบัติเหตุ
  };

  const handleIncidentComplete = () => {
    setShowIncident(false);
    navigation.navigate("RequestStatus"); // ไปยังหน้าถัดไป
  };

  const handleNotificationPress = () => {
    setShowNotifications(!showNotifications); // แสดงหรือซ่อนการแจ้งเตือน
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency! Need Help?</Text>
      <Text style={styles.subtitle}>Press the button below, and help will arrive shortly</Text>
      <TouchableOpacity style={styles.sosButton} onPress={handleSosPress}>
        <FontAwesome5 name="ambulance" size={50} color="white" />
        <Text style={styles.sosText}>EMERGENCY</Text>
      </TouchableOpacity>

      {/* ไอคอนกระดิ่งที่มุมบนซ้าย */}
      <TouchableOpacity style={styles.notificationIcon} onPress={handleNotificationPress}>
        <FontAwesome5 name="bell" size={30} color="black" />
      </TouchableOpacity>

      {/* แสดงป๊อปอัพตามลำดับ */}
      {showAssessment && <AssessmentPopup onClose={handleAssessmentComplete} />}
      {showIncident && <IncidentPopup onClose={handleIncidentComplete} />}

      {/* Navbar */}
      <Navbar navigation={navigation} />

      {/* ตัวอย่างการแจ้งเตือน */}
      {showNotifications && (
        <View style={styles.notificationPopup}>
          <Text style={styles.notificationText}>Your request status has been updated!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#e74c3c', textAlign: 'center' },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 20 },
  sosButton: {
    backgroundColor: '#e74c3c',  
    width: 200,  
    height: 200,  
    borderRadius: 100,  
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  sosText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,  
  },
  notificationIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,  
  },
  notificationPopup: {
    position: 'absolute',
    top: 100,
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 5,
    zIndex: 20,  
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SosScreen;
