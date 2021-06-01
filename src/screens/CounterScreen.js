import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Current count: { counter }</Text>

      <Button
        title='Increase'
        style={styles.btn}
        onPress={ () => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        style={styles.btn}
        onPress={ () => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 40,
    paddingBottom: 10,
  }
});

export default CounterScreen;
