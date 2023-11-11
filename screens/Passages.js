import { Text,StyleSheet, Image, ScrollView,SafeAreaView,View } from 'react-native';

export default function Passages() {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
      <Text style= {styles.titulo}>Passages</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/emiratesair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Dubai</Text>
      <Text style={styles.paragraph1}>R$4000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>

      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/Kuwaitair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Maldivas</Text>
      <Text style={styles.paragraph1}>R$4900,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
      
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/cathayair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Egypt</Text>
      <Text style={styles.paragraph1}>R$6500,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
     
      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/jalair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Japan</Text>
      <Text style={styles.paragraph1}>R$8000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
     
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/Americanair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>United States</Text>
      <Text style={styles.paragraph1}>R$3000,00</Text>
      <Image source={require('../assets/botao-de-compra.png')} style={styles.image1} />
      </View>
    
      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/lufair.jpg")}/>
      </SafeAreaView>
      <View style={styles.container2}>
      <Text style={styles.paragraph1}>Greece</Text>
      <Text style={styles.paragraph1}>R$6000,00</Text>
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
    fontSize:20
  },
  img:{
    width:330,
    height:110,
    borderRadius: 50,
    margin: 15 
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
  cxfoto:{
  backgroundColor: "#ffcbdb",
  marginTop: 20,
  alignItens:'center',
  borderRadius: 15,
  paddingLeft: 10

  }

});