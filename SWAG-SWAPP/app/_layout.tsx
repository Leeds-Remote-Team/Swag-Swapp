import { Stack } from "expo-router";
import { useState, useContext, createContext } from "react";

export const ImageContext = createContext(null);
export const UserAccountContext = createContext(null);

export default function RootLayout() {
  const [testImage, setTestImage] = useState("");
  const [userAccount, setUserAccount] = useState("");
  return (
    <UserAccountContext.Provider value={[userAccount, setUserAccount]}>
      <ImageContext.Provider value={[testImage, setTestImage]}>
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </ImageContext.Provider>
    </UserAccountContext.Provider>
  );
}
