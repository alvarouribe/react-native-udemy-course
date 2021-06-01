import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageItem = ({ title, imageSource }) => {
  // console.log('props', props);
  // props Object {
  //   "title": "Jungle",
  // }

  return (
    <View>
      <TouchableOpacity onPress={() => { console.log(`image "${title}" clicked.`); }} >
        <Image source={ imageSource } />
      </TouchableOpacity>
      <Text style={styles.h2}>{ title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
  }
});

export default ImageItem;
