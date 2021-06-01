import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi There Alvaro!';
  const newGreeting = <Text>Another way to add text component</Text>;

  return (
    <View>
      <Text style={ styles.h2 }>Text inits</Text>

      <Text style={ styles.textStyle }>This is the components screen</Text>

      <Text>{ greeting }, second Text component</Text>

      { newGreeting }

      <Text style={ styles.h2 }>Interactions</Text>

      <Button
        title='Soy un Button!'
        onPress={() => {
          console.log('Button onPress WTFF');
      }} />

      <TouchableOpacity onPress={() => { console.log('Touchable Opacity WTF'); }} >
        <Text style={styles.text}>I am a Text inside TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  h2: {
    fontSize: 25,
    marginVertical: 20
  },
});

export default ComponentsScreen;