import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    'sand': require('../assets/fonts/Quicksand-Regular.ttf'),
    'sandmedium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'sandbold': require('../assets/fonts/Quicksand-Bold.ttf'),
  })
  return <Stack />;
}
