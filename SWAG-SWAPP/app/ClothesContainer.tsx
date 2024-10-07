import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ClothesCard } from "./ClothesCard";

export const ClothesContainer = ({ title, items }) => {
  return (
    <View>
      <Text>{title}</Text>
      <ScrollView horizontal>
        {items.map((item, index) => (
          <ClothesCard key={index} image={item.img_url} title={""} />
        ))}
      </ScrollView>
    </View>
  );
};
