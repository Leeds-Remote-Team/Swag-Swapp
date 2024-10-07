import React from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { useState, createContext, useContext } from "react";
import { Link } from "expo-router";
import { UserAccountContext } from "../_layout";
import { Header } from "../Header";

export default function clothes() {
  const userAccount = useContext(UserAccountContext)
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <View style={styles.container}>
        <Header />
        <Text >{"name"}</Text>
        <img src="" alt="" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
<<<<<<< HEAD
=======

// Get hold of the single clothe id which is item_id.
//useEffect to fetch the item through query database
//Extract the datas from our database and Ximilar Api to be able to design our page
//Design the page with the data.

//This page will get hold of the data from API and dispaly properly.
//2 Pages
//1 from the Ximilar API and
//2 from the main main page ---> when a user clicks an item in the page.
//
>>>>>>> 6973a0d (in progress)
