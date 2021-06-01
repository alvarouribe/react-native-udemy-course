import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// El reducer es bueno ponerlo afuera del functional component para que
// no tengamos doble "state" variable
const reducer = (state, action) => {
  // Argumento 1: El objeto que tiene todos los STATES
  // state === { red: number, green: number, blue: number };

  // Argumento 2: El objeto que describe como vamos a actualizar el STATE
  // action === { colorToChange: 'red' || 'green || 'blue', amount: 15 || -15 }

  switch(action.colorToChange) {
    case 'red':
      // remplaza el color del estado
      return (state.red + action.amount > 255 || state.red + action.amount < 0)
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return (state.green + action.amount > 255 || state.green + action.amount < 0)
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      // siempre tenemos que retornar el valor del primer argumento
      return state;
  }
};

const ReducerScreen = () => {
  // Cada vez que cambie state el componente se va a reRenderizar
  // Tendrá el valor que la funcion reducer retorne
  const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() => runMyReducer({colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => runMyReducer({colorToChange: 'red', amount: -1 * COLOR_INCREMENT })} />
      <ColorCounter
        color="Green"
        onIncrease={() => runMyReducer({colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => runMyReducer({colorToChange: 'green', amount: -1 * COLOR_INCREMENT })} />
      <ColorCounter
        color="Blue"
        onIncrease={() => runMyReducer({colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => runMyReducer({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })} />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default ReducerScreen;
