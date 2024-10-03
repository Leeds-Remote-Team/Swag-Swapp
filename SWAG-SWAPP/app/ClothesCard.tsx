import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export const ClothesCard = ({ title }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
        <View style={styles.cardPlaceholder}></View>
      </ScrollView>
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
