import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchHospitalBar = ({ data, setFilteredData }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text); // อัพเดตค่าคำค้นหาทุกครั้งที่พิมพ์

    // กรองข้อมูลทันทีที่พิมพ์
    if (data && setFilteredData) {
      const filteredData = data.filter(
        (item: any) =>
          item.name.toLowerCase().includes(text.toLowerCase()) || // ค้นหาจากชื่อ
          item.phone.replace(/\D/g, "").includes(text.replace(/\D/g, "")) // ค้นหาจากเบอร์
      );
      setFilteredData(filteredData); // ส่งผลลัพธ์กลับไปยัง HomeScreen
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search hospitals..."
        value={searchQuery}
        onChangeText={handleSearch} // Trigger search on text change
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9e0f5",
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchHospitalBar;
