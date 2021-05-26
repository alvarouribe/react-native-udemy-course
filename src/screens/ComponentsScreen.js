import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi There Alvaro!';
  const newGreeting = <Text>Another way to add text component</Text>;

  return (
    <View>
      <Text style={ styles.textStyle }>This is the components screen</Text>
      <Text>{ greeting }, second Text component</Text>
      { newGreeting }
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;