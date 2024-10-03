import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="home" size={40} />
      </TouchableOpacity>
      <TextInput placeholder="Search a keyword here" style={styles.searchBar} />
      <TouchableOpacity>
        <Icon name="person" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
