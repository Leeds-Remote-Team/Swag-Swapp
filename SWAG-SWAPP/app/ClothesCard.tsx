import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export const ClothesCard = ({ title }) => {
  return (
    <View style={styles.section}>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
