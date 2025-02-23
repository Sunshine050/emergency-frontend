import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ data, setFilteredData }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (data && setFilteredData) {
      const filteredData = data.filter((item: any) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.phone.replace(/\D/g, '').includes(text.replace(/\D/g, ''))
      );
      setFilteredData(filteredData);
    }
  };

  return (
    <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="#060708" />
      <TextInput
        style={styles.searchInput}
        placeholder="ค้นหา..."
        placeholderTextColor="#050606"
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#05080b',
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    color: '#050606',
  },
});

export default SearchBar;
