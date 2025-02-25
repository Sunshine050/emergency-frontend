import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import HospitalCard from "../../components/Nearby/HospitalCard";
import SearchHospitalBar from "../../components/Nearby/SearchHospitalBar";
import Navbar from "../../components/Navbar";

interface Hospital {
  id: string;
  name: string;
  specialty: string;
  address: string;
  phone?: number;
  image: string;
}

const API_URL = "https://66d20b1562816af9a4f5a8b0.mockapi.io/hospitals";

const NearbyScreen = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredData, setFilteredData] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response");
        }

        const validHospitals = data
          .filter((item) => item.id) 
          .map((item) => ({
            ...item,
            id: String(item.id), 
          }));

        setHospitals(validHospitals);
        setFilteredData(validHospitals);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={styles.title}>Hospitals Nearby</Text>
        </View>
      ),

      headerTitleAlign: "center",
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <SearchHospitalBar data={hospitals} setFilteredData={setFilteredData} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#36679f"
            style={{ marginTop: 250 }}
          />
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HospitalCard {...item} />}
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      <Navbar />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  notificationIcon: {
    marginRight: 15,
  },
});

export default NearbyScreen;
