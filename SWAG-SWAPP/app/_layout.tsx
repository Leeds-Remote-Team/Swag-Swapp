import { Stack } from "expo-router";
import { useState, useContext, createContext } from "react";

export const ImageContext = createContext(null);

export default function RootLayout() {
  const [testImage, setTestImage] = useState("");
  return (
    <ImageContext.Provider value={[testImage, setTestImage]}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ImageContext.Provider>
  );
}
