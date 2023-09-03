import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [tulos, setTulos] = useState('');
  const [result, setResult] = useState('');
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const laske = operator => {
    console.log(operand1, operand2, operator);
    const [number1, number2] = [Number(operand1), Number(operand2)];
    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
    }
    setData([...data, { key: tulos }]);
    setTulos(number1 + operator + number2 + ' = ' + result);
    setOperand1('');
    setOperand2('');
    initialFocus.current.focus();
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput style={styles.input} ref={initialFocus}
      keyboardType='number-pad'
      onChangeText={text => setOperand1(text)}
      value={operand1}>
      </TextInput>
      <TextInput style={styles.input} ref={initialFocus}
      keyboardType='number-pad'
      onChangeText={text => setOperand2(text)}
      value={operand2}>
      </TextInput>
      <View style={styles.operators}>
        <View style={styles.button}>
          <Button title='+' onPress={() => laske('+')}></Button>
        </View>
        <View style= {styles.button}>
            <Button title='-' onPress={() => laske('-')}></Button>
        </View>
        <View style= {styles.history}>
      </View>
      
      </View>
      <Text>History</Text>
          <FlatList style={styles.list}
          data={data} 
          renderItem={({item}) => <Text>{item.key}</Text>} /> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%'
  },
  operators: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    width: '20%'
  },
  history: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  }
});
