import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{ color }</Text>
      <Button title="onIncrease" onPress={() => { onIncrease() }} />
      <Button title="onDecrease" onPress={() => { onDecrease() }} />
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
  }
});

export default ColorCounter;
