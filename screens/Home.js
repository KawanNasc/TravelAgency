import { Text,StyleSheet, Image, ScrollView,SafeAreaView,View } from 'react-native';

export default function Home() {
  return (
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
       <Text style= {styles.titulo}>Fly with us</Text>
      </SafeAreaView>
     <Image style = {styles.img1}resizeMethod="center" source={ require("../assets/home.jpg")}/>  
     <Image style = {styles.img1}resizeMethod="center" source={ require("../assets/caribe.png")}/>   
       <Text style={styles.paragraph}>Upcomming Flight</Text> 
      <Image style = {styles.img2}resizeMethod="center" source={ require("../assets/linharot.png")}/>
      <View style={styles.container1}>
      <Image source={require('../assets/hospedagem.png')} style={styles.image1} />
      <Image source={require('../assets/ingressos.png')} style={styles.image1} />
      <Image source={require('../assets/restaurante.png')} style={styles.image1} /> 
      <Image source={require('../assets/trem.png')} style={styles.image1} />
    </View>
        <View style={styles.container2}>
      <Text style={styles.paragraph1}>Hotels</Text>
      <Text style={styles.paragraph1}>Attractions</Text>
      <Text style={styles.paragraph1}>Eats</Text>
      <Text style={styles.paragraph1}>Commute</Text>
    </View>
      <Text style={styles.paragraph}>Trending Destination</Text> 
     <View style={styles.container1}>
      <Image source={require('../assets/tradilha.jpg')} style={styles.image} />
      <Image source={require('../assets/tradeif.jpg')} style={styles.image} />
      <Image source={require('../assets/traddisn.jpg')} style={styles.image} />
    </View>
    <View style={styles.container2}>
      <Text style={styles.paragraph1}>Maldivas</Text>
      <Text style={styles.paragraph1}>Paris</Text>
      <Text style={styles.paragraph1}>Disney</Text>
    </View>
      
    <View style={styles.container1}>
      <Image source={require('../assets/cartao.jpg')} style={styles.image1} />
 <Text style={styles.paragraph1}>20% OFF with Julius Card</Text>
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
    container1: {
    flex: 1,
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: '#ecf0f1',
    padding: 0,
    justifyContent: 'space-between',
    margin: 3  
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
    padding: 18,
    fontSize:50
  },
    img1:{
    width:370,
    height:300,
    borderRadius: 8,
    margin: 15 
  },
    img2:{
    width:350,
    height:60,
    borderRadius: 8,
    margin: 25 
  },
    image: {
    width: 100,  
    height: 80,  
    marginVertical: 10,  
    margin: 10,
    alignItems: 'center',
    padding: 18
  },
   image1: {
    width: 60, 
    height: 50, 
    marginVertical: 10,  
    margin: 10,
    alignItems: 'center',
    padding: 18
  },
  paragraph:{
    fontSize:20,
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding:5,
    margin: 10
  },
  paragraph1: {
    margin: 24,
    fontSize: 14,
    marginTop: 0,
    textAlign: 'center',
    flexDirection: 'row'
  }
});