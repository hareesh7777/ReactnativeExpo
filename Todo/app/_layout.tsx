import { Stack } from "expo-router";
import Home from "./screens/Home/Home";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}}>
    {/* <Stack.Screen name="home" /> */}
  </Stack>;
}
