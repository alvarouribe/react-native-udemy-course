import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  // console.log(props.navigation);
  // props.navigation.navigate

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🐸 Welcome mr Alvaro 🐸</Text>

      <Text style={ styles.menu }>MENU</Text>

      <Button
        onPress={() => props.navigation.navigate('Gallery') }
        style={styles.btn}
        title='Gallery Example'/>

      <Button
        onPress={() => props.navigation.navigate('List') }
        style={styles.btn}
        title='List Example'/>

      <Button
        onPress={() => props.navigation.navigate('Counter') }
        style={styles.btn}
        title='Counter Example'/>

      <Button
        onPress={() => props.navigation.navigate('Reducer') }
        style={styles.btn}
        title='Reducer Example'/>

      <Button
        onPress={() => props.navigation.navigate('Colors') }
        style={styles.btn}
        title='Colors Example'/>

      <Button
        onPress={() => props.navigation.navigate('Names') }
        style={styles.btn}
        title='Names Example'/>

      <Button
        onPress={() => props.navigation.navigate('Web') }
        style={styles.btn}
        title='Web Example'/>

      <Button
        onPress={() => props.navigation.navigate('Text') }
        style={styles.btn}
        title='Text Example'/>

      <Button
        onPress={() => props.navigation.navigate('Box') }
        style={styles.btn}
        title='FlexBox Example'/>

      <TouchableOpacity style={styles.touchOpa} onPress={() => { props.navigation.navigate('Components') }} >
        <Text style={styles.text}>Components Example</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',

  },
  btn: {
    padding: 5,
    margin: 5,
    marginVertical: 8,
  },
  touchOpa: {
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 30,
    padding: 5,
    margin: 5
  },
  btn: {
    borderColor: 'red',
  },
  h2: {
    fontSize: 25,
  },
  menu: {
    marginVertical: 20,
    textAlign: 'center',
  }
});

export default HomeScreen;
