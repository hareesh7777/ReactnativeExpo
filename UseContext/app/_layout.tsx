import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="signup"/>
      <Stack.Screen name="home"/>
    </Stack>
    </AuthProvider>
  );
}
