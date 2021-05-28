import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageItem from '../components/ImageItem';

const ImageGallery = ({ navigation }) => {
  // console.log(navigation);

  return (
    <View>
      <Text style={styles.h2}>🐸 Image Gallery 🐸</Text>

      <ImageItem
        title='Rain forest pal pico'
        imageSource={ require('../../assets/imageGallery/beach.jpg') } />

      <ImageItem
        title='Jungle'
        imageSource={ require('../../assets/imageGallery/forest.jpg') } />

      <ImageItem
        title='Desert'
        imageSource={ require('../../assets/imageGallery/mountain.jpg') } />
    </View>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 25,
    marginVertical: 10,
  }
});

export default ImageGallery;
