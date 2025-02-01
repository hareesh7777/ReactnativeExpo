import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily: 'sand'}}>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}
