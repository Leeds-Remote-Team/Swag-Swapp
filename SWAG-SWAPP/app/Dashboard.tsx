import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from "./Header";
import { ClothesCard } from "./ClothesCard";
import { Link } from "expo-router";

const Dashboard = () => {
  // const mostWornClothes = *some logic*
  // const mostRecentClothes = *some logic*
  // const oldestClothes = *some logic*

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ClothesCard title="Favorite Clothes" />
        <ClothesCard title="Most Recent Clothes" />
        <ClothesCard title="Accessories" />
        <ClothesCard title="Oldest Clothes" />
      </ScrollView>
      <View style={styles.add}>
        <TouchableOpacity>
          <Link href="/camera/camera">
            <Icon name="add" size={50} />
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  add: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Dashboard;
