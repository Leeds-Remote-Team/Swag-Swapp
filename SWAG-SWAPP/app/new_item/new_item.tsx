import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ClothesContext } from "../_layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://swagswapp-api.onrender.com/api",
});

export default function newItem() {
  const [clothesItems, setClothesItems] = useContext(ClothesContext);
  const { Category, Color } = clothesItems[0]._tags_map;
  const TopCategory = clothesItems[0]._tags_map["Top Category"];
  const [posting, setPosting] = useState(true);
  const [postImage, setPostImage] = useState(clothesItems.url); // image url
  const [cat, setCat] = useState(Category);
  const [topCat, setTopCat] = useState(TopCategory);
  const [colorTag, setColorTag] = useState(Color);
  const tags = clothesItems[0]._tags_map;
  const [tag, setTag] = useState(tags);
  const user_id = 2;
  const [clothesData, setClothesData] = useState({});

  console.log(clothesItems);

  useEffect(() => {
    setClothesData({
      user_id: user_id,
      img_url: postImage,
      top_category: topCat,
      category: cat,
      tags: tag,
      color: colorTag,
    });
    setPosting(false);
  }, []);

  const postClothes = (user_id, clothesData) => {
    return api.post(`/clothes/${user_id}`, clothesData);
  };

  const handlePress = () => {
    postClothes(user_id, clothesData).then((response) => {
      console.log(response.data.postedClothes);
      return response.data.postedClothes;
    });
  };

  return (
    <View>
      <Image source={clothesItems.url} style={styles.clothesImage}></Image>
      <Text>{Category}</Text>
      <Text>{TopCategory}</Text>
      <Text>{Color}</Text>

      <TouchableOpacity onPress={handlePress} disabled={posting}>
        <Icon name="add" size={40} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  clothesImage: {
    width: 50,
    height: 50,
  },
});
