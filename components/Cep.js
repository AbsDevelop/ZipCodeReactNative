import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Cep(props){
  return(
    <View style={styles.textBlock}>
    <Text style={styles.title}>Resultado:</Text>
      <Text style={styles.text}>CEP: {props.data.cep}</Text>
      <Text style={styles.text}>Logradouro: {props.data.logradouro}</Text>
      <Text style={styles.text}>Bairro: {props.data.bairro}</Text>
      <Text style={styles.text}>Localidade: {props.data.localidade}</Text>
      <Text style={styles.text}>UF: {props.data.uf}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  textBlock: {
    marginTop: 5,
    padding: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    backgroundColor: 'white'
  }
});  