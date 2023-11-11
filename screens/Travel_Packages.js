import { Text,StyleSheet, Image, ScrollView,SafeAreaView,View } from 'react-native';

export default function Travel_Packages() {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
       <Text style= {styles.titulo}>Travel Packeges</Text>
      </SafeAreaView>
      
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/vegas.jpg")}/>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Las Vegas</Text>
      <Text style={styles.paragraph1}>R$14000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
      
      <Image style={styles.img} resizeMethod="center" source={require("../assets/disney.jpg")}/>
       <View style={styles.container2}>
      <Text style={styles.paragraph1}>Disneyland</Text>
      <Text style={styles.paragraph1}>R$12000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
  
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/egito.jpg")}/>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Egypt</Text>
      <Text style={styles.paragraph1}>R$16000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
      
      <Image style={styles.img} resizeMethod="center" source={require("../assets/japao.jpg")}/>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Japan</Text>
      <Text style={styles.paragraph1}>R$18000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>

  
     </ScrollView>
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding: 8,
    backgroundColor: '#add8e6',
  }, 
      container2: {
    flex: 1,
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: '#add8e6',
    padding: 0,
    justifyContent: 'space-between',
    margin: 3  
  },
    titulo:{
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding: 8,
    fontSize:50
  },
  img:{
    width:390,
    height:250,
    borderRadius: 8,
    margin: 0 
  },
  image1: {
    width: 60, 
    height: 50, 
    marginVertical: 10,  
    margin: 10,
    alignItems: 'center',
    padding: 18
  },
  paragraph1: {
    margin: 24,
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
    flexDirection: 'row'
  },
});