import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileInfo = () => {
    const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+66 912345678",
    allergies: "Penicillin",
    medicalHistory: "Hypertension",
    lastVisit: "2024-02-01",
};

return (
    <View style={styles.container}>
      {/* Profile Section */}
    <View style={styles.profileSection}>
        <View style={styles.profileIcon}>
        <Icon name="user" size={60} color="#4A90E2" />
        </View>
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>
        <Text style={styles.profilePhone}>{userData.phone}</Text>
    </View>

      {/* Health Information */}
    <View style={styles.healthInfoSection}>
        <Text style={styles.healthInfoTitle}>Health Information</Text>
        <Text style={styles.healthInfoText}>Allergies: {userData.allergies}</Text>
        <Text style={styles.healthInfoText}>Medical History: {userData.medicalHistory}</Text>
        <Text style={styles.healthInfoText}>Last Visit: {userData.lastVisit}</Text>
    </View>

      {/* Edit Profile Button */}
    <TouchableOpacity
        style={styles.editButton}
        onPress={() => console.log("Edit Profile")}
    >
        <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: "#fff", alignItems: "center" },
profileSection: { alignItems: "center", marginTop: 40 },
profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
},
profileName: { fontSize: 22, fontWeight: "bold", marginTop: 10, color: "#000" },
profileEmail: { fontSize: 16, color: "#555", marginTop: 5 },
profilePhone: { fontSize: 16, color: "#555", marginTop: 5 },

healthInfoSection: {
    marginTop: 20,
    width: "80%",  // ขยายความกว้างของกรอบ
    backgroundColor: "#f8f8f8",
    height: 200,  // ขยายความสูงของกรอบ
    padding: 25,  // เพิ่ม padding เพื่อให้กรอบมีขนาดใหญ่ขึ้น
    borderRadius: 8,
    alignItems: "flex-start",
    textAlign: "auto",
},

healthInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
},
healthInfoText: { fontSize: 16, color: "#555", marginTop: 5 },

editButton: { marginTop: 30, backgroundColor: "#4A90E2", padding: 10, borderRadius: 8 },
editButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default ProfileInfo;
