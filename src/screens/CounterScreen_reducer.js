import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }

  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View>
      <Text>X Current count: { state.count }</Text>

      <Button
        title='Increase'
        style={styles.btn}
        onPress={ () => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        style={styles.btn}
        onPress={ () => {
          dispatch({ type: 'decrement', payload: 1 });
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
