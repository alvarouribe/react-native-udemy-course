import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Juan' },
    { name: 'David' },
    { name: 'Mariela' },
    { name: 'Valeria' },
    { name: 'john' },
    { name: 'julian' },
    { name: 'Juan 2' },
    { name: 'David 2' },
    { name: 'Mariela 2' },
    { name: 'Valeria 2' },
    { name: 'john 2' },
    { name: 'julian 2' },
  ];

  // To remove the FlatList items without a key warning...
  // Requirement: - Must be a string & - Must be unique

  // option1
  // We could add a key manually to our array
  // const friends = [
  //   { name: 'Juan',  key: '1' },
  //   { name: 'Juan2', key: '2' },

  // option2
  // Must be unique so repetitive name of friends will have an issue
  // <FlatList keyExtractor={(friend) => friend.name}

  return (
    <View style={ styles.view }>

      <Text style={ styles.h2 }>Horizontal FlatList</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={ true }
        style={ styles.flatList }
        data={ friends }
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          // console.log(item);
          return <Text style={ styles.listItem }>{ item.name }</Text>
        }} />

      <Text style={ styles.h2 }>Vertical FlatList</Text>
      <FlatList
        style={ styles.flatList }
        data={ friends }
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          // console.log(item);
          return <Text style={ styles.listItem }>{ item.name }</Text>
        }} />

    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 30,
  },
  listItem: {
    padding: 15,
    backgroundColor: 'skyblue',
    marginVertical: 5,
    marginHorizontal: 5
  },
  h2: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    marginVertical: 10,
  }
});

export default ListScreen;