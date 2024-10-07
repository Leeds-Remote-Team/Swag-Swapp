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
  const [userAccount] = useContext(UserAccountContext);
  const [clotheItem, setClotheItem] = useState(null);
  const [top_category, setTopCategory] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const router = useRouter();
  // const { item_id } = router.query;

  // if (!item_id) {
  //   return <Text> No item id to edit </Text>;
  // }

  // console.log(item_id);

  useEffect(
    () => {
      // if (item_id) {
      axios
        .get(
          `https://swagswapp-api.onrender.com/api/clothes/3/${userAccount.user_id}`
        )
        .then((response) => {
          const item = response.data[0];
          setClotheItem(item);
          setTopCategory(item.top_category);
          setCategory(item.category);
          setColor(item.color);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(`Fail to load item. Error is: ---> ${err}`);
          setIsLoading(false);
        });
    },
    // }
    [userAccount]
  );

  const handleSubmitEdit = () => {
    let newDetails = {
      top_category: top_category,
      category: category,
      color: color,
    };

    axios
      .patch(
        `https://swagswapp-api.onrender.com/api/clothes/3/${userAccount.user_id}`,
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

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.name}>Editing Details</Text>
      <Image
        style={styles.image}
        source={{
          uri: clotheItem.image_url || "Image unavialble",
        }}
      />
      <View style={styles.tagContainer}>
        <Text style={styles.descriptionLabel}>Description:</Text>
      </View>
      <Text style={styles.descriptionLabel}>Description:</Text>
      <Text style={styles.descriptionText}>
        This is a short description of the item.
      </Text>
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.top_category}
        value={top_category}
        onChangeText={setTopCategory}
      />
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.category}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.descriptionText}
        placeholder={clotheItem.color}
        value={color}
        onChangeText={setColor}
      />
      <Text style={styles.descriptionText}>
        Wear Frequency: {clotheItem.tags.wear_frequency}
      </Text>
      <TouchableOpacity
        style={styles.wearTodayButton}
        onPress={handleSubmitEdit}
      >
        <Text style={styles.buttonText}>Submit</Text>
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

export default editClothesItem;
