import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={ styles.menu }>Show me some colors</Text>

      <Button
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
        style={styles.btn}
        title='Add a Color' />

      <View style={styles.colorWrapper}>
        <FlatList
          keyExtractor={(item) => item}
          data={colors}
          renderItem={({ item }) => {
            return (
              <View style={{ height: 100, width: 100, backgroundColor: item }} />
            )
          }} />

      </View>
    </View>
  );
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

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  console.log(rgb);
  return rgb;
};

export default ColorScreen;
