import { View, Text, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const addlist = () => {
    const [list, setList] = useState<any>([]);
    const [value, setValue] = useState('')
  
    const addItem =()=>{
      if (list.length < 10) {
        setList([...list, {id: list.length, }])
      } else {
        Alert.alert('list is exceeded')
      }
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={addItem}>
            <Text>Add More</Text>
          </TouchableOpacity>
          
          <FlatList 
          data={list}
          renderItem={({item}: any)=>{
            return(
              <TextInput 
              value={value}
              style={{margin: 10, backgroundColor: 'white',height: 50, width: '80%', borderWidth: 2, borderColor: 'black', borderRadius: 5}}
              />
            )
          }}
          ItemSeparatorComponent={()=><View style={{ width: '70%', height: 10}}/>}
          keyExtractor={(item)=>item.id}
          />
          
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
  

export default addlist