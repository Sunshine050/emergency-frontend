import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IncidentPopup = ({ onClose }: { onClose: () => void }) => {
  const navigation = useNavigation();
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);

  const handleCancel = () => {
    onClose(); // ปิด Modal
    navigation.navigate('SOS' as never); // กลับไปยังหน้า SOS
  };

  const handleConfirm = () => {
    if (selectedIncident) {
      onClose(); // ปิด Modal เฉพาะเมื่อมีตัวเลือก
    }
  };

  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>สถานการณ์อุบัติเหตุ</Text>
          {["รถล้ม", "น้ำร้อนลวก", "ขูดถลอก"].map((incident, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIncident === incident && styles.selectedButton, // เปลี่ยนสีถ้าเลือก
              ]}
              onPress={() => setSelectedIncident(incident)}
            >
              <Text style={styles.buttonText}>{incident}</Text>
            </TouchableOpacity>
          ))}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.confirmButton,
                !selectedIncident && styles.disabledButton, // ปิดใช้งานถ้าไม่ได้เลือก
              ]}
              onPress={handleConfirm}
              disabled={!selectedIncident} // ปิดใช้งานถ้าไม่ได้เลือก
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  popup: { width: 300, backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  button: { width: "100%", padding: 10, marginVertical: 5, backgroundColor: '#ddd', borderRadius: 5, alignItems: 'center' },
  selectedButton: { backgroundColor: '#4CAF50' }, // สีเขียวเมื่อเลือก
  buttonText: { fontSize: 16, color: 'black' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  cancelButton: { padding: 10, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 },
  confirmButton: { padding: 10, backgroundColor: 'green', borderRadius: 5 },
  disabledButton: { backgroundColor: 'lightgray' }, // สีเทาเมื่อปิดใช้งาน
  cancelText: { color: 'white', fontWeight: 'bold' },
  confirmText: { color: 'white', fontWeight: 'bold' },
});

export default IncidentPopup;
