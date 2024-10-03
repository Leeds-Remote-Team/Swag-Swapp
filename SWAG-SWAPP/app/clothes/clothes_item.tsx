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
import { useState } from "react";
import { Link } from "expo-router";

export default function clothes() {
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
