import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

export default function App() {
	const [cep, setCep] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
	async function carregaCep(){
		const response = await Api.get('ws/'+inputCep+'/json/');
		setCep(response.data); 
	};	
	
return (
	<View style={styles.container}>
    	<Text style={styles.title}>
        	Código de Endereçamento Postal
      	</Text>

      	<Image style={styles.img}
        	source={{uri: 'https://cdn-icons-png.flaticon.com/512/40/40054.png',}}  
      	/>

      	<Text style={styles.textBlock}>Informe seu CEP: </Text>
      	<TextInput style={styles.input}
        	placeholder="Ex.: 11750-000"
      	/>
	  
		<TouchableOpacity style={styles.btn}
 	    	onPress={carregaCep}	
			onChangeText={(data)=>setInputCep(data)}
		>
			<Text style={styles.textbtn}>Buscar</Text>
		</TouchableOpacity>	

      	<Cep data={cep}/>
      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 24,
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  img: {
    width: 250,
    height: 250,
    marginTop: -30,
    marginBottom: -30
  },
  input: {
    borderBottomWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 20
  },
  textBlock: {
    fontSize: 20
  },
  btn: {
	width: '80%',
  marginTop: -10,
  marginBottom: 15
  },
  textbtn: {
	fontSize: 20,
	textAlign: 'center'
  }
});