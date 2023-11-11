import { useState,useEffect} from 'react';
import {
Text,
SafeAreaView, 
StyleSheet,
Image,
View,
TextInput,
TouchableOpacity ,
ScrollView,
Button
} from 'react-native';

import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


  function login(){
    Firebase.auth().signInWithEmailAndPassword(email,senha).catch(function (error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode,errorMessage);

    })
  }
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(function(user){
      setUser(user)
      if(initializing) setInitializing(false)
    });
  },[])

  if(user){
    alert('Bem-Vindo'+ user.uid);
    return navigation.navigate('Home');
  }
  else{
   //alert("E-Mail ou senha incorretos");
  }

  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../assets/travel.jpg')} style={styles.logo}/>
      <Text style={styles.textoentrada}>
       World Travel Agency
      </Text>
      <View style={styles.cont}>
      <TextInput
      placeholderTextColor={'#1a1a1a'}
      style={styles.textoinput}
      placeholder="E-mail "
      onChangeText={(email) => setEmail(email)}
      value={email}
      />
      <TextInput
      placeholderTextColor={'#1a1a1a'}
      style={styles.textoinput}
      placeholder="Password "
      onChangeText={(senha) => setSenha(senha)}
      value={senha
      }
      />
      
      <TouchableOpacity 
      style={styles.botao} 
      onPress={() =>{
        login();
      }}>
      <Text style={styles.textobotao}> Login </Text>
      </TouchableOpacity>
    
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ffbf80',
    padding: 10,

  },
  logo:{
    borderRadius:300,
    width:250,
    height:200,
    borderWidth:4,
    borderColor:'#0099e6',
  },
  textoentrada:{
    fontSize:30,
    margin:30,
    fontWeight:'900',
    color:'#0077b3',
  },
  cont:{
    width:300,
    height:250,
    borderRadius:30,
    borderColor:'#0099e6',
    borderWidth:4,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  textoinput:{
    borderRadius:20,
    borderColor:'#0099e6',
    borderWidth:3,
    width:250,
    height:50,
    backgroundColor:'#80d4ff',
    margin:10,
    textAlign:'center',
    fontSize:20,
  },
  textobotao:{
    width:100,
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
  },  
  botao:{
    width:100,
    backgroundColor:'#0099e6',
    margin:5,
    alignItems:'center',
    height:30,
    justifyContent:'center',
    borderRadius:30,
    fontSize:40,
  },
});