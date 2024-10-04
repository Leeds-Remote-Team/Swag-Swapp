import React, { useEffect } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { Link, Redirect } from "expo-router";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import { UserAccountContext } from "../_layout";

export default function userLogin() {
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [userAccount, setUserAccount] = useContext(UserAccountContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const router = useRouter();

  const handleLogin = () => {
    if (!userNameText || !passwordText) {
      Alert.alert("Error", "Fill the blanks first!!");
      console.log("Error");
      return;
    }
    setIsLoading(true);
    axios
      .get(`https://swagswapp-api.onrender.com/api/users/${userNameText}`)
      .then((response) => {
        console.log(response);
        setUserAccount(response.data);
        setIsLoading(false);
        Alert.alert("Success", "Login Successful!");
        router.push("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(`Fail to retreive User Id. Error is: ${err}`);
        Alert.alert("Error", "Invalid username or password.");
      });
  };

  console.log(userNameText, passwordText);

  if (isLoading) {
    return (
      <View>
        <Text> Retreiving User Details </Text>
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
