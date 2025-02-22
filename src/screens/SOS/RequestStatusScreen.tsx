import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const RequestStatusScreen = ({ navigation }: any) => {
  const [municipalPhone, setMunicipalPhone] = useState<string | null>(null);

  useEffect(() => {
    const fetchMunicipalPhone = async () => {
      try {
        const mockPhone = 'เทศบาล'; // เบอร์เทศบาลตัวอย่าง
        setMunicipalPhone(mockPhone);
      } catch (error) {
        console.error('Error fetching municipal phone:', error);
      }
    };
    fetchMunicipalPhone();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.requestTitle}>Request</Text>

      <View style={styles.statusContainer}>
        <FontAwesome name="ambulance" size={24} color="black" />
        <Text style={styles.status}>Move</Text>
        <FontAwesome name="location-arrow" size={24} color="black" />
        <Text style={styles.status}>Enroute</Text>
        <FontAwesome name="hospital-o" size={24} color="black" />
        <Text style={styles.status}>Arrive</Text>
      </View>

      {/* ปุ่มโทรในแนวนอน */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => municipalPhone && Linking.openURL(`tel:${municipalPhone}`)}
        >
          <MaterialIcons name="phone" size={24} color="black" />
          <Text style={styles.callText}>Call {municipalPhone}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:1669')}
        >
          <MaterialIcons name="phone-in-talk" size={24} color="black" />
          <Text style={styles.callText}>Call 1669</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="cancel" size={24} color="white" />
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  requestTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row', // เรียงปุ่มในแนวนอน
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row', // ไอคอนและข้อความเรียงข้างกัน
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // ปรับขนาดปุ่มให้พอดีกับหน้าจอ
  },
  callText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  cancelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default RequestStatusScreen;
