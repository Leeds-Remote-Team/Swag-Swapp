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
import { Link } from "expo-router";
import { ClothesContainer } from "./ClothesContainer";
import { fetchAllAccessories } from "@/Helpers/fetchAllAccessories";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

const Dashboard = () => {
  const user_id = 3;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [accessories, setAccessories] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    let newAccessories; // Declare newAccessories here

    fetchAllAccessories(user_id)
      .then((data) => {
        newAccessories = data; // Assign the fetched data to newAccessories
        setAccessories(newAccessories);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {/* <ClothesContainer title="Favorite Clothes" items={favoriteClothes} />
        <ClothesContainer title="Most Recent Clothes" items={mostRecent} /> */}
        <ClothesContainer title="Accessories" items={accessories} />
        {/* <ClothesContainer title="Oldest Clothes" items={oldestClothes} /> */}
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
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Dashboard;
