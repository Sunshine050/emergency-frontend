import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({
  data,
  setFilteredData,
  style,
  textStyle,
  iconStyle,
}: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (data && setFilteredData) {
      const filteredData = data.filter(
        (item: any) =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.phone.replace(/\D/g, "").includes(text.replace(/\D/g, ""))
      );
      setFilteredData(filteredData);
    }
  };

  return (
    <View style={[styles.searchBar, style]}>
      <FontAwesome
        style={[style.iconStyle, iconStyle]}
        name="search"
        size={20}
        color="#6c6e6f"
      />
      <TextInput
        style={[styles.searchInput, textStyle]}
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f2",
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    color: "#050606",
  },
  iconStyle: {
    marginHorizontal: 4,
  },
});

export default SearchBar;
