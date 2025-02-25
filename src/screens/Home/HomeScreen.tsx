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

const emergencyContacts: contact[] = [
  { id: "1", name: "สายด่วนช่วยเหลือสัตว์มีพิษ", icon: "paw", phone: "1669" },
  { id: "2", name: "ศูนย์พิษวิทยา", icon: "user-md", phone: "02-257-1600" },
  { id: "3", name: "สายด่วนน้ำท่วม", icon: "tint", phone: "1125" },
  { id: "4", name: "ธนาคารกรุงเทพ", icon: "bank", phone: "1333" },
  { id: "5", name: "ธนาคารไทยพาณิชย์", icon: "bank", phone: "02-777-7777" },
  { id: "6", name: "ธนาคารกสิกรไทย", icon: "bank", phone: "02-888-8888" },
  {
    id: "7",
    name: "สายด่วนตำรวจไซเบอร์",
    icon: "shield",
    phone: "02-141-2070",
  },
  {
    id: "8",
    name: "กรมป้องกันและบรรเทาสาธารณภัย",
    icon: "shield",
    phone: "1784",
  },
  { id: "9", name: "หน่วยกู้ภัยน้ำท่วม", icon: "ambulance", phone: "1669" },
  { id: "10", name: "สายด่วนกู้ชีพ", icon: "heart", phone: "1669" },
  {
    id: "11",
    name: "ศูนย์ช่วยเหลือผู้บริโภค",
    icon: "info-circle",
    phone: "1557",
  },
  { id: "12", name: "ตำรวจท่องเที่ยว", icon: "user", phone: "1155" },
  { id: "13", name: "การไฟฟ้านครหลวง", icon: "bolt", phone: "1130" },
  {
    id: "14",
    name: "การท่องเที่ยวแห่งประเทศไทย",
    icon: "globe",
    phone: "1672",
  },
  { id: "15", name: "สายด่วนตำรวจ 191", icon: "shield", phone: "191" },
  { id: "16", name: "สายด่วนไฟฟ้าขัดข้อง", icon: "fire", phone: "1199" },
  { id: "17", name: "การประปานครหลวง", icon: "tint", phone: "1125" },
  { id: "18", name: "กรมเจ้าท่า", icon: "anchor", phone: "1199" },
  { id: "19", name: "ศูนย์พิษวิทยา", icon: "user-md", phone: "02-257-1600" },
  { id: "20", name: "กรมทางหลวง", icon: "road", phone: "1586" },
];

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
          onPress={() => navigation.navigate("Notifications" as never)}
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
