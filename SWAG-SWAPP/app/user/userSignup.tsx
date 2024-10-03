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
import { useRouter } from "expo-router";

export default function userSignup() {
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const router = useRouter();

  const handleSignup = () => {
    if (!firstNameText || !lastNameText || !userNameText || !passwordText) {
      Alert.alert("Error", "Fill the blanks first!!");
      console.log("Error");
      return;
    }

    // Alert.alert("Success!", "You've created your account!");
    console.log("Success");
    router.push("/Dashboard");
  };

  console.log(firstNameText, lastNameText, userNameText, passwordText);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Signup </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstNameText}
        onChangeText={setFirstNameText}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastNameText}
        onChangeText={setLastNameText}
      />
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
      <Button title="Signup" onPress={handleSignup} />
      <Link style={styles.link} href="/user/userLogin">
        {" "}
        Already Have An Account? Log In!{" "}
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
