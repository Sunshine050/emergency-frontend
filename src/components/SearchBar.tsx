import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ data, setFilteredData }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text); // อัพเดตค่าคำค้นหาทุกครั้งที่พิมพ์

    // กรองข้อมูลทันทีที่พิมพ์
    if (data && setFilteredData) {
      const filteredData = data.filter((item: any) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filteredData); // ส่งผลลัพธ์ที่กรองแล้ว
    }
  };

  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="#aaa" />
      <TextInput
        style={styles.searchInput}
        placeholder="ค้นหา..."
        value={searchQuery}
        onChangeText={handleSearch} // ค้นหาทุกครั้งที่พิมพ์
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default SearchBar;
