import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { Header } from "../Header";
import axios from "axios";
import { useState, createContext, useContext } from "react";
import { Link } from "expo-router";
import { UserAccountContext } from "../_layout";
import { useRouter } from "expo-router";

const editClothesItem = () => {
  //   const userAccount = useContext(UserAccountContext);

  const router = useRouter();
  const { clotheItem } = router.state || {};

  if (!clotheItem) {
    return <Text> No item to edit </Text>;
  }

  const [top_category, setTopCategory] = useState(clotheItem.top_category);
  const [category, setCategory] = useState(clotheItem.category);
  const [color, setColor] = useState(clotheItem.color);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const today = new Date();

  if (isLoading) {
    return (
      <View>
        <Text> Loading </Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>{isError}</Text>
      </View>
    );
  }

  if (!clotheItem) {
    return (
      <View>
        <Text>No such clothing itme!</Text>
      </View>
    );
  }

  const tags = [
    clotheItem.top_category,
    clotheItem.category,
    clotheItem.color,
    clotheItem.tags.sleeves,
    clotheItem.tags.style,
  ];

  const handleEdit = () => {
    let newDetails = {
      top_category: top_category,
      category: category,
      color: color,
    };

    axios
      .patch(
        `https://swagswapp-api.onrender.com/api/clothes/${id}/1`,
        newDetails
      )
      .then((response) => {
        // setClotheItem((prevState) => ({
        //   ...prevState,
        //   top_category: newDetails.top_category,
        //   category: newDetails.category,
        //   color: newDetails.color,
        // }));
        console.log("Success");
        Alert.alert("Success!", "Clothes updated!");
        router.push("/clothes/clothes_item");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "You can't wear this today!");
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.name}>Editing Details</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://uhqkbcxmjnqjhwbmupzq.supabase.co/storage/v1/object/public/ClothingImages/public/1727434604611.jpg",
        }}
      />
      <View style={styles.tagContainer}>
        <Text style={styles.descriptionLabel} placeholder={cloth}>
          Description:
        </Text>
      </View>
      <Text style={styles.descriptionLabel}>Description:</Text>
      <Text style={styles.descriptionText}>
        This is a short description of the item.
      </Text>
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.top_category}
        value={clotheItem.top_category}
        onChangeText={setTopCategory}
      />
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.top_category}
        value={clotheItem.top_category}
        onChangeText={setTopCategory}
      />
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.top_category}
        value={clotheItem.top_category}
        onChangeText={setTopCategory}
      />

      <Text style={styles.descriptionText}>
        Wear Frequency: {clotheItem.tags.wear_frequency}
      </Text>
      <TouchableOpacity
        style={styles.wearTodayButton}
        onPress={handleWearToday}
      >
        <Text style={styles.buttonText}>Wear Today</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wearTodayButton} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit Details</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34495E",
    marginBottom: 10,
    textAlign: "center",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  tag: {
    backgroundColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  tagText: {
    color: "#111",
    fontSize: 14,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#2C3E50",
  },
  descriptionText: {
    fontSize: 16,
    color: "#7F8C8D",
    marginBottom: 5,
  },
  wearTodayButton: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

// export default clothes_item;
