import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeworkScreen2_16 = () => {
  const user = 'Alvaro';

  return (
    <View>
      <Text style={ styles.headerStyle }>Getting started with React Native</Text>
      <Text style={ styles.subHeaderStyle }>My name is { user }!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default HomeworkScreen2_16;
