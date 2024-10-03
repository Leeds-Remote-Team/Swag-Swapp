import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Link href="/user/userSignup"> Signup </Link>
      <Link href="/user/userLogin"> Login </Link>
      <Link href="/clothes/clothes_item"> Clothes Detail </Link>

      <Link href="/Dashboard"> Dashboard </Link>
    </View>
  );
}
