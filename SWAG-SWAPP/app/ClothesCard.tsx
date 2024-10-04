import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export const ClothesCard = ({ title, image }) => {
  return (
    <View style={styles.section}>
      <Image source={image} style={styles.cardPlaceholder} />
      <Text style={styles.title}>{title}</Text>
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
