import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const AssessmentPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>โปรดเลือกระดับอาการ</Text>
          {["เกรด 1: ไม่ร้ายแรง", "เกรด 2: ปานกลาง", "เกรด 3: ร้ายแรง", "เกรด 4: ฉุกเฉิน"].map((level, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>{level}</Text>
            </TouchableOpacity>
          ))}
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
  buttonText: { fontSize: 16, color: 'black' },
});

export default AssessmentPopup;
