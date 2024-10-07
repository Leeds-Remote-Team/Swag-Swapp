import { View, Text, Image } from "react-native";
import { ClothesContext } from "../_layout";
import { useContext, useEffect, useState } from "react";

export default function newItem() {
  const [clothesItems, setClothesItems] = useContext(ClothesContext);
  const [postImage, setPostImage] = useState("");
  const [cat, setCat] = useState("");
  const [topCat, setTopCat] = useState("");
  const [colorTag, setColorTag] = useState("");
  const [tag, setTag] = useState({});

  const { Category, TopCategory, Color } = clothesItems[0]._tags_map;

  const tags = clothesItems.tags_map;

  console.log(clothesItems);

  useEffect(() => {
    setPostImage(clothesItems.url);
    setCat(Category);
    setTopCat(TopCategory);
    setColorTag(Color);
    setTag(tags);
  }, []);

  return (
    <View>
      <Image source={clothesItems.url}></Image>
      <Text>{Category}</Text>
      <Text>{TopCategory}</Text>
      <Text>{Color}</Text>
    </View>
  );
}
