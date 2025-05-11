import { useAuth } from "@/context/AuthContext";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

export default function Index() {
  const navigation = useNavigation();
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ name: "", email: "" });
  const [text, setText] = useState(0);

  const handleLogin = () => {
    if (name && email) {
    } else {
      setError({ name: "Name is required", email: "Email is required" });
    }
  };

  const handle = () => {
    setText(text + 1);
  };
  let str =
    "jashbauyergwdshjbxmcnfseorkwjoiehfkjsdnvkjsehiuwhekjs01kjdhewyshjabs";
  let modified = str
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char === "e") return "3";
      if (char === "o") return "0";
      return char;
    })
    .reverse()
    .join("");


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
        <View>
          <Text>Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => {
              setName(text);
              setError({ name: "", email: error.email });
            }}
            style={styles.input}
            placeholder={"Enter Name"}
            multiline
            maxLength={50}
            returnKeyType="done"
            returnKeyLabel="done"
          />
          {error.name && <Text style={styles.errorText}>{error.name}</Text>}
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
            placeholder={"Enter Name"}
            multiline
            maxLength={50}
            returnKeyType="done"
            returnKeyLabel="done"
          />
          {error.name && <Text style={styles.errorText}>{error.name}</Text>}
        </View>
        {/* <Text>{text}</Text> */}
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.textView}>
        <Text>
          Don't have an account?{" "}
          <Text style={styles.sign} onPress={() => {}}>
            SignUp
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  inputView: {
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: 250,
  },
  errorText: {
    color: "red",
  },
  textView: {
    marginTop: 10,
  },
  sign: {
    color: "blue",
    textDecorationLine: "underline",
    opacity: 1,
  },
});
