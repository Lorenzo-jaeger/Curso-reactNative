import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// //componentes e props

// function TextView(props) {
//   return <Text> {props.title}</Text>;
// }


export default function App() {
  const [number, setNumber] = useState(0);

  function incrementacao() {
    return setNumber(number + 1);
  }
  return (
    <View style={styles.container}>
      {/* <Text>hello word!</Text> */}
      {/* <TextView title="ola"/> */}

      <Text>{number}</Text>

      <TouchableOpacity style={styles.btn} onPress={incrementacao}>
        <Text style={styles.text}> add +</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#00ff6c',
    padding: 20,
    margin: 20,
  },
  text: {
    color: '#00a6e3',
  },
});
