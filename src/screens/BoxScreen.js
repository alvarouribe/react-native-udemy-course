import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {

  return (
    <View style={styles.viewContainer}>
      <Text>Column (default)</Text>

      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2 (flex 1)</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>

      <Text>ROW</Text>

      <View style={styles.rowViewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2 (flex 1)</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>

      <Text>Tarea 82</Text>

      <View style={styles.rowView82}>
        <Text style={styles.textOne82}>Child #1</Text>
        <Text style={styles.textTwo82}>Child #2</Text>
        <Text style={styles.textThree82}>Child #3</Text>
      </View>
    </View>
  );
};

// Flex box para PARENTS:
//   alignItems (propiedad global para CHILDS)
  // - strech (default)
  // - flex-start
  // - flex-end
  // - center

// justifyContent:
  // - flex-start
  // - flex-end
  // - center
  // - space-between

// * flexDirection:
//   - column (default)
//   - row

// Flexbox para CHILDS
// * flex: 1...etc
// * alignSelf (propiedad para un CHILD)
  // - strech (default)
  // - flex-start
  // - flex-end
  // - center

// POSITION
  // - relative (default)
  // - absolute // ignora el espacio de los items flex pero se mueve con las reglas de alineamiento

// We can use
// top
// left
// right
// bottom

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: 'flex-start',
  },
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
    padding: 6,
    justifyContent: 'center',
    height: 200,
  },
  rowViewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
    padding: 6,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 200,
  },

  textOneStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'center',
  },
  textThreeStyle: {
    borderWidth: 2,
    borderColor: 'red',
    // Flex 1 - It will try to grab as much space that it can
  },
  // Homework chapter 82
  rowView82: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 160
  },
  textOne82: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'red',
  },
  textTwo82: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'red',
    top: 80,
    // or alignSelf: 'flex-end'
    // or marginTop: 40
    // or paddingTop: 40
  },
  textThree82: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'red',
  }
});

export default BoxScreen;