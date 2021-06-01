import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import Data from '../../data/names.json';

const NamesScreen = () => {
  const namesArray = Data.names.data;
  console.log('namesArray', namesArray);
  const [names, setAName] = useState(namesArray);

  return (
    <View style={styles.container}>
      <Text style={ styles.menu }>Show me some names</Text>

      <Button
        onPress={() => {
          setAName([...names, addNewName()]);
        }}
        style={styles.btn}
        title="Show me a another name" />

      <View style={styles.colorWrapper}>

        <FlatList
          keyExtractor={(item) => item.name}
          data={names}
          renderItem={({ item }) => {
            return (
              <Text style={{ height: 30, width: 100, textAlign: 'center' }} >
                { item.name }
              </Text>
            )
          }} />

      </View>
    </View>
  );
};

const addNewName = () => {
  console.log('addNewName');
  return 'jackson';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  btn: {
    padding: 5,
    margin: 5,
    marginVertical: 8,
  },
  colorWrapper: {
    flex: 1,
    alignItems: 'center',
  }
});

export default NamesScreen;
