import * as React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Button, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions
} from 'react-native';

export default function Home(props){
  return(
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>CaféDev Menu</Text>
    <Image style={styles.img} source={require('../assets/coffee.png')} />
    <Text style={styles.subtitle}>Clique para acessar</Text>

    <View style={styles.btncontainer}>  
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Café')}}>
        <Text style={styles.btn} >Clássicos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{props.navigation.navigate('Frappe')}} >
        <Text style={styles.btn}>Frappuccinos</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.btncontainer}> 
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Doces')}}>
        <Text style={styles.btn}>Doces</Text>
      </TouchableOpacity >

      <TouchableOpacity onPress={()=>{props.navigation.navigate('Sanduiches')}}>
        <Text style={styles.btn}>Sanduíches</Text>
      </TouchableOpacity>
      </View>  
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItens: 'center',
  },
  img: {
    margin: 10,
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.83,
    height: Dimensions.get('window').height * 0.38
  },
  title: {
    color: '#491706',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 32,
    marginTop:30,
    lineHeight: 34,
    textShadowColor:"#000",
    textShadowOffset:{width: 2, height: 1},
    textShadowRadius:3,
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    color: '#491706',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    textTransform:'uppercase'
  },
   btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin:10  
   },
   btn:{
    backgroundColor:'#BC9C7B',
    padding:12,
    borderRadius: 8,
    fontSize: 18,
    width: 130,
    height: 50,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
   }
});