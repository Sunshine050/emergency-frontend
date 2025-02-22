import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IncidentPopup = ({ onClose }: { onClose: () => void }) => {
  const navigation = useNavigation();
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  const [otherIncident, setOtherIncident] = useState<string>('');

  const incidentList = [
    "รถล้ม",
    "น้ำร้อนลวก",
    "ขูดถลอก",
    "หกล้ม",
    "บาดเจ็บจากไฟฟ้า",
    "ถูกแมลงสัตว์กัดต่อย",
    "อื่นๆ"
  ];

  const handleCancel = () => {
    onClose(); // ปิด Modal
    navigation.navigate('SOS' as never); // กลับไปยังหน้า SOS
  };

  const handleConfirm = () => {
    if (selectedIncident || otherIncident) {
      onClose(); // ปิด Modal เฉพาะเมื่อมีตัวเลือกหรือระบุอาการ
    }
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.button, selectedIncident === item && styles.selectedButton]} // เปลี่ยนสีถ้าเลือก
      onPress={() => {
        setSelectedIncident(item);
        setOtherIncident(''); // เคลียร์ข้อมูลอื่นๆ เมื่อเลือก
      }}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>สถานการณ์อุบัติเหตุ</Text>
          
          {/* ใช้ FlatList เพื่อเลื่อนดูรายการอุบัติเหตุ */}
          <FlatList
            data={incidentList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
          />
          
          {selectedIncident === 'อื่นๆ' && (
            <TextInput
              style={styles.input}
              placeholder="กรุณาระบุอาการ..."
              value={otherIncident}
              onChangeText={setOtherIncident}
            />
          )}

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmButton, !(selectedIncident || otherIncident) && styles.disabledButton]} // ปิดใช้งานถ้าไม่ได้เลือก
              onPress={handleConfirm}
              disabled={!(selectedIncident || otherIncident)} // ปิดใช้งานถ้าไม่ได้เลือก
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
  list: { maxHeight: 200, width: '100%' }, // จำกัดความสูงเพื่อให้สามารถเลื่อนดูได้
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  cancelButton: { padding: 10, backgroundColor: 'gray', borderRadius: 5, marginRight: 10 },
  confirmButton: { padding: 10, backgroundColor: 'green', borderRadius: 5 },
  disabledButton: { backgroundColor: 'lightgray' }, // สีเทาเมื่อปิดใช้งาน
  cancelText: { color: 'white', fontWeight: 'bold' },
  confirmText: { color: 'white', fontWeight: 'bold' },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
  },
});

export default IncidentPopup;
