import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// El reducer es bueno ponerlo afuera del functional component para que
// no tengamos doble "state" variable
const reducer = (state, action) => {
  // Argumento 1: El objeto que tiene todos los STATES
  // state === { red: number, green: number, blue: number };

  // Argumento 2: El objeto que describe como vamos a actualizar el STATE
  // action === { type: 'change_red' || 'change_green || 'change_blue', payload: 15 || -15 }

  switch(action.type) {
    case 'change_red':
      // remplaza el color del estado
      return (state.red + action.payload > 255 || state.red + action.payload < 0)
        ? state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0)
        ? state
        : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        ? state
        : { ...state, blue: state.blue + action.payload }
    default:
      // siempre tenemos que retornar el valor del primer argumento
      return state;
  }
};

const ReducerScreen = () => {
  // Cada vez que cambie state el componente se va a reRenderizar
  // Tendrá el valor que la funcion reducer retorne
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT })} />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT })} />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT })} />

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
