import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props);
  // console.log(props.navigation);
  // props.navigation.navigate

  return (
    <View>
      <Text style={styles.text}>🐸 Welcome mr Alvaro 🐸</Text>
      <Button
        title='Soy un boton! :S'
        onPress={() => {
          console.log('Button onPress WTFF');
      }} />

      <TouchableOpacity onPress={() => { console.log('Touchable Opacity WTF'); }} >
        <Text style={styles.text}>I am a Text inside TouchableOpacity</Text>
      </TouchableOpacity>

      <Text style={ styles.menu }>MENU</Text>

      <Button
        onPress={() => props.navigation.navigate('Gallery') }
        title='Gallery Example'/>

      <Button
        onPress={() => props.navigation.navigate('List') }
        title='List Example'/>

      <TouchableOpacity onPress={() => { props.navigation.navigate('Components') }} >
        <Text style={styles.text}>Components Example</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  btn: {
    borderColor: 'red',
  },
  h2: {
    fontSize: 25,
  },
  menu: {
    marginVertical:20,
  }
});

export default HomeScreen;
