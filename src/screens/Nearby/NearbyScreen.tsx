import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import HospitalCard from "../../components/Nearby/HospitalCard";
import SearchHospitalBar from "../../components/Nearby/SearchHospitalBar";

const hospitals = [
  {
    id: "1",
    name: "Dr. Mia Pramudianti",
    specialty: "Umum",
    address:
      "Panti Bahagia, Jl. Tentara Pelajar No.61, Kemirirejo, Kec. Magelang Tengah",
    phone: "08123456789", // Add a phone number for testing the filter
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "2",
    name: "Dr. John Boss",
    specialty: "Pediatrician",
    address: "Jl. Tentara Pelajar No.50, Kemirirejo, Kec. Magelang Tengah",
    phone: "08987654321", // Add a phone number for testing the filter
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "3",
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    address: "Jl. Tentara Pelajar No.50, Kemirirejo, Kec. Magelang Tengah",
    phone: "08987654321", // Add a phone number for testing the filter
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "4",
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    address: "Jl. Tentara Pelajar No.50, Kemirirejo, Kec. Magelang Tengah",
    phone: "08987654321", // Add a phone number for testing the filter
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "5",
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    address: "Jl. Tentara Pelajar No.50, Kemirirejo, Kec. Magelang Tengah",
    phone: "08987654321", // Add a phone number for testing the filter
    image: "https://picsum.photos/200/300/?blur",
  },
];

const NearbyScreen = () => {
  const [filteredData, setFilteredData] = useState(hospitals);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Hospitals nearby</Text>
        {/* Use SearchHospitalBar component */}
        <SearchHospitalBar data={hospitals} setFilteredData={setFilteredData} />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HospitalCard {...item} />}
          contentContainerStyle={{ paddingBottom: 50 }} // Add padding to the bottom
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 25,
    textAlign: "center",
  },
});

export default NearbyScreen;
