import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Header } from "../Header";
import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "expo-router";
import { UserAccountContext } from "../_layout";
import { useRouter } from "expo-router";

const clothes_item = () => {
  const [userAccount, setUserAccount] = useContext(UserAccountContext);
  const [clotheItem, setClotheItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `https://swagswapp-api.onrender.com/api/clothes/3/${userAccount.user_id}`
      )
      .then((response) => {
        setClotheItem(response.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(`Fail to load item. Error is: ---> ${err}`);
        setIsLoading(false);
      });
  }, [userAccount]);

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

  const handleWearToday = () => {
    let newWearUpdate = {
      last_date_worn: new Date().toISOString().split("T")[0],
      wear_frequency: clotheItem.tags.wear_frequency + 1,
    };
    axios
      .patch(
        `https://swagswapp-api.onrender.com/api/clothes/3/${userAccount.user_id}`,
        newWearUpdate
      )
      .then((response) => {
        setClotheItem((prevState) => ({
          ...prevState,
          tags: {
            ...prevState.tags,
            last_date_worn: new Date().toISOString().split("T")[0],
            wear_frequency: prevState.tags.wear_frequency + 1,
          },
        }));
        console.log("Success");
        Alert.alert("Marked as Worn", "You are wearing this item today!");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "You can't wear this today!");
      });
  };

  const handleEdit = () => {
    router.push({
      pathname: "/clothes/editClothesItem",
      params: { item_id: clotheItem.item_id },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.name}>Clothes Item Name</Text>
        <Image
          style={styles.image}
          source={{
            uri: clotheItem.img_url || "Image unavailable",
          }}
        />
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.descriptionLabel}>Description:</Text>
        <Text style={styles.descriptionText}>
          This is a short description of the item.
        </Text>
        <Text style={styles.descriptionText}>
          Last Worn: {clotheItem.tags.last_date_worn}
        </Text>
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
      </ScrollView>
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

export default clothes_item;

// 1. handle wear today => patch wear freqency and last_date_worn
// 2. handle edit => edit page => gives user access details to edit
// 3. edit page will have submit button => Patch and update the clothes item
