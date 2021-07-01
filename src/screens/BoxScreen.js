import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: 200,
  },
  textStyle: {
    borderWidth: 2,
    borderColor: 'red',
  }
});

export default BoxScreen;