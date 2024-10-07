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

export default function userSignup() {
  const [userNameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [firstNameText, setFirstNameText] = useState("");
  const [lastNameText, setLastNameText] = useState("");
  const [userAccount, setUserAccount] = useContext(UserAccountContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const router = useRouter();

  const handleSignup = () => {
    if (!firstNameText || !lastNameText || !userNameText || !passwordText) {
      Alert.alert("Error", "Fill the blanks first!!");
      console.log("Error");
      return;
    }
    let newUser = {
      username: userNameText,
      first_name: firstNameText,
      last_name: lastNameText,
      password: passwordText,
    };
    setIsLoading(true);
    axios
      .post(`https://swagswapp-api.onrender.com/api/users`, newUser)
      .then((response) => {
        console.log(response);
        setUserAccount(newUser);
        console.log("New User Crated :", userAccount);
        Alert.alert("Success", "Enjoy SwagSwapping! Start adding your clothes");
        router.push("/camera/camera");
      })

      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(`Fail to create New User. Error is: ${err}`);
        Alert.alert(
          "Error",
          "Account Creation Failed, Reported to our engineers"
        );
      });
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
