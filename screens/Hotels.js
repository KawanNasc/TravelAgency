import { Text,StyleSheet, Image, ScrollView,SafeAreaView,View } from 'react-native';

export default function Hotels() {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
      <Text style= {styles.titulo}>Hotels</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/grecia.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Greece</Text>
      <Text style={styles.paragraph1}>R$4000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>

      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/maldivas.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Maldives Islands</Text>
      <Text style={styles.paragraph1}>R$4800,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
 
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/dubai.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Dubai</Text>
      <Text style={styles.paragraph1}>R$6000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
       
      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/caribe.png")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Caribbean</Text>
      <Text style={styles.paragraph1}>R$6200,00</Text>
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
    image1: {
    width: 60, 
    height: 50, 
    marginVertical: 10,  
    margin: 10,
    alignItems: 'center',
    padding: 18
  },
    titulo:{
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding: 8,
    fontSize:20
  },
   paragraph1: {
    margin: 24,
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
    flexDirection: 'row'
  },
  img:{
    width:250,
    height:200,
    borderRadius: 8,
    margin: 15 
  },
  paragraph:{
    fontSize:20
  },
  cxfoto:{
  backgroundColor: "#ffcbdb",
  marginTop: 20,
  alignItens:'center',
  borderRadius: 15,
  paddingLeft: 10

  }

});