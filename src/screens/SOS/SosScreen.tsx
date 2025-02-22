import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AssessmentPopup from '../../components/AssessmentPopup';
import IncidentPopup from '../../components/IncidentPopup';
import Navbar from '../../components/Navbar'; // import Navbar

const SosScreen = ({ navigation }: any) => {
  const [showAssessment, setShowAssessment] = useState(false);
  const [showIncident, setShowIncident] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you in an emergency?</Text>
      <Text style={styles.subtitle}>Press the button below and help will arrive shortly</Text>
      <TouchableOpacity style={styles.sosButton} onPress={handleSosPress}>
        <FontAwesome5 name="exclamation-circle" size={50} color="white" />
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      {/* แสดงป๊อปอัพตามลำดับ */}
      {showAssessment && <AssessmentPopup onClose={handleAssessmentComplete} />}
      {showIncident && <IncidentPopup onClose={handleIncidentComplete} />}

      {/* Navbar */}
      <Navbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'black', textAlign: 'center' },
  subtitle: { fontSize: 14, color: 'gray', textAlign: 'center', marginBottom: 20 },
  sosButton: { backgroundColor: 'red', padding: 60, borderRadius: 100, justifyContent: 'center', alignItems: 'center' },
  sosText: { fontSize: 32, color: 'white', fontWeight: 'bold' },
});

export default SosScreen;
