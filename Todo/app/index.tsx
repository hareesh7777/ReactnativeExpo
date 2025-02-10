import { rMS } from "@/utils/Theme";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import ToastManager, { Toast } from "toastify-react-native";

export default function Index() {
  const [textValue, setTextValue] = useState("");
  const [list, setList] = useState<any>([]);
  const [editText, setEditText] = useState("");
  const [edit, setEdit] = useState(null);

  const addToList = () => {
    if (textValue.length > 0) {
      setList([...list, { id: Date.now().toString(), text: textValue }]);
      setTextValue("");
    } else {
      Toast.error("Please enter text", "center");
    }
  };
  const renderItem = ({ item }: any) => {
    const addEditItem = () => {
      if (editText.length > 0) {
        const newList = list.map((listItem: any) => {
          if (listItem.id === edit) {
            listItem.text = editText;
          }
          return listItem;
        });
        setList(newList);
        setEdit(null);
      } else {
        Toast.success("Please enter text", "bottom");
      }
    };
    const editItem = (item: any) => {
      setEditText(item.text);
      setEdit(item.id);
    };
    const deleteItem = (item: any) => {
      const newList = list.filter((listItem: any) => listItem.id !== item.id);
      setList(newList);
    };
    return (
      <View style={styles.renderList}>
        {edit === item.id ? (
          <>
            <TextInput
              value={editText}
              placeholder="Enter text here"
              style={[styles.textInput, { width: rMS(150) }]}
              onChangeText={(text) => setEditText(text)}
            />
            <Button title="Submit" onPress={addEditItem} />
          </>
        ) : (
          <Text style={styles.textItem}>{item.text}</Text>
        )}
        {edit !== item.id && (
          <>
            <Button title="Edit" onPress={() => editItem(item)} />
            <Button title="Delete" onPress={() => deleteItem(item)} />
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToastManager
        duration={1000}
        showCloseIcon={false}
        showProgressBar={false}
      />
      <TextInput
        value={textValue}
        placeholder="Enter text here"
        style={styles.textInput}
        onChangeText={(text) => setTextValue(text)}
      />
      <Button title="Submit" onPress={addToList} />
      <View>
        <FlatList data={list} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  textInput: {
    borderWidth: rMS(1),
    borderColor: "black",
    width: "80%",
    padding: rMS(10),
    // margin: rMS(10),
    alignSelf: "center",
    borderRadius: rMS(5),
  },
  renderList: {
    flexDirection: "row",
    justifyContent: "center",
    padding: rMS(10),
    margin: rMS(10),
    alignItems: "center",
    flex: 1,
  },
  textItem: {
    fontSize: rMS(14),
    width: rMS(200),
  },
});
