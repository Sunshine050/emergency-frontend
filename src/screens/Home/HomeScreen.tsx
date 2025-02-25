import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import SearchBar from "../../components/SearchbarHome/SearchBar";
import Navbar from "../../components/Navbar";
import { useNavigation } from "@react-navigation/native";

const API_URL = "https://my.api.mockaroo.com/Emergency_contacts?key=27fa01c0";

interface contact {
  id: string;
  name: string;
  icon: string;
  phone: string;
}

const HomeScreen: React.FC = () => {
  const [emergencyContacts, setEmergencyContacts] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setEmergencyContacts(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.title}>เบอร์ติดต่อฉุกเฉิน</Text>,
      headerRight: () => (
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => navigation.navigate("NotificationScreen" as never)}
        >
          <FontAwesome5 name="bell" size={24} color="#333" />
        </TouchableOpacity>
      ),
      headerTitleAlign: "center",
      headerLeft: () => null, // ลบปุ่มย้อนกลับ
    });
  }, [navigation]);

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderItem = ({ item }: { item: contact }) => (
    <TouchableOpacity
      style={styles.contactRow}
      onPress={() => {
        handleCall(item.phone);
      }}
      activeOpacity={0.8}
    >
      <FontAwesome
        name={item.icon as any}
        size={24}
        color="#fff"
        style={styles.contactIcon}
      />

      <View style={styles.contactInfo}>
        <Text style={styles.contactName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.contactNumber}>{item.phone}</Text>
      </View>

      <FontAwesome
        name="phone"
        size={24}
        color="#fff"
        style={styles.phoneIcon}
      />
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <SearchBar
          data={emergencyContacts}
          setFilteredData={setFilteredData}
          style={styles.searchBar}
        />
        {/* Show loading indicator while fetching data */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#36679f"
            style={styles.loader}
          />
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
      {/* <Navbar /> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 20,
    backgroundColor: "#fefefe",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0c0c0c",
  },
  notificationIcon: {
    // padding: 10,
    marginRight: 20,
  },
  searchBar: {
    // borderColor: "#ffffff",
    marginTop: 20,
    marginHorizontal: 20,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: "#36679f",
    elevation: 4,
  },
  contactIcon: {
    textAlign: "center",
    marginLeft: 4,
    marginRight: 12,
    minWidth: 28,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  contactNumber: {
    fontSize: 14,
    color: "#BBDEFB",
  },
  phoneIcon: {
    marginHorizontal: 4,
    minWidth: 28,
  },
  loader: {
    marginTop: 250,
  },
});

export default HomeScreen;
