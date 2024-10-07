import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ClothesCard = ({ title, image }) => {
  console.log(image);
  return (
    <View style={styles.section}>
      <TouchableOpacity>
        <Image source={image} style={styles.cardPlaceholder} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
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
