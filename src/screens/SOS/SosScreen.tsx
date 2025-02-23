import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AssessmentPopup from '../../components/sos/AssessmentPopup';
import IncidentPopup from '../../components/sos/IncidentPopup';
import Navbar from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const SosScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showAssessment, setShowAssessment] = useState(false);
  const [showIncident, setShowIncident] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSosPress = () => setShowAssessment(true);
  const handleAssessmentComplete = () => {
    setShowAssessment(false);
    setShowIncident(true);
  };
  const handleIncidentComplete = () => {
    setShowIncident(false);
    navigation.navigate('RequestStatus' as never);
  };
  const handleNotificationPress = () => setShowNotifications(!showNotifications);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Emergency! Need Help?</Text>
        <Text style={styles.subtitle}>Press the button below, and help will arrive shortly</Text>
        <TouchableOpacity style={styles.sosButton} onPress={handleSosPress}>
          <FontAwesome5 name="ambulance" size={50} color="white" />
          <Text style={styles.sosText}>EMERGENCY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationIcon} onPress={handleNotificationPress}>
          <FontAwesome5 name="bell" size={30} color="black" />
        </TouchableOpacity>

        {showAssessment && <AssessmentPopup onClose={handleAssessmentComplete} />}
        {showIncident && <IncidentPopup onClose={handleIncidentComplete} />}

        {showNotifications && (
          <View style={styles.notificationPopup}>
            <Text style={styles.notificationText}>Your request status has been updated!</Text>
          </View>
        )}
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: '#f8f9fa', paddingBottom: 60 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
