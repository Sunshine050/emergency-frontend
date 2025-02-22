import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import ไอคอน
import HospitalCard from "../../components/Nearby/HospitalCard"; // คุณสามารถปรับแต่งการ์ดในนี้
import SearchHospitalBar from "../../components/Nearby/SearchHospitalBar";
import Navbar from "../../components/Navbar"; // ✅ นำเข้า Navbar

const hospitals = [
  {
    id: "1",
    name: "Chiang Rai Rajabhat University Hospital",
    specialty: "General Medicine",
    address: "Nong Bua, Muang District, Chiang Rai",
    phone: "053123456",
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "2",
    name: "Chiang Rai Prachanukroh Hospital",
    specialty: "Emergency Medicine",
    address: "Sukhumvit Rd, Muang Chiang Rai",
    phone: "053721234",
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    id: "3",
    name: "Boonrueng Hospital",
    specialty: "Pediatrics",
    address: "Khon Kaen Rd, Muang Chiang Rai",
    phone: "053222333",
    image: "https://picsum.photos/200/300/?blur",
  },
];

const NearbyScreen = () => {
  const [filteredData, setFilteredData] = useState(hospitals);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={styles.title}>Hospitals Nearby</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => navigation.navigate('NotificationScreen' as never)}
        >
          <FontAwesome5 name="bell" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerTitleAlign: "center", // จัดกลาง
      headerLeft: () => null, // เอาปุ่มย้อนกลับออก
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <SearchHospitalBar data={hospitals} setFilteredData={setFilteredData} />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HospitalCard {...item} />}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
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
