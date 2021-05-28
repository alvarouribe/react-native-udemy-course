import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageItem = props => {
  // console.log('props', props);
  // props Object {
  //   "title": "Jungle",
  // }

  return (
    <View>
      <Image source={ props.imageSource } />
      <Text style={styles.h2}>{ props.title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
  }
});

export default ImageItem;
