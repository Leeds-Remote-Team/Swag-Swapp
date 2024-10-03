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
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function userLogin() {
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (!userNameText || !passwordText) {
      Alert.alert("Error", "Fill the blanks first!!");
      console.log("Error");
      return;
    }

    Alert.alert("Success!", "You've created your account!");
    console.log("Success");
    // return <Redirect href="/Dashboard" />;
    router.push("/Dashboard");
  };

  console.log(userNameText, passwordText);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userNameText}
        onChangeText={setUserNameText}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={passwordText}
        onChangeText={setPasswordText}
      />
      <Button title="Login" onPress={handleLogin} />
      <Link style={styles.link} href="/user/userSignup">
        Don't Have an Account? Signup!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "grey",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
