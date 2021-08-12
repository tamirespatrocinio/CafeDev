import * as React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList 
} from 'react-native';

const doce = [
  {
    id: '1',
    title: 'Roll de Canela',
    info:'Rolinho recheado com açúcar e canela'
  },
  {
    id: '2',
    title: 'Cookie de Baunilha ou Chocolate',
    info: 'Biscoitos crocantes com gotas de chocolate.'
  },
  {
    id: '3',
    title: 'Bolo Red Velvet',
    info:'Massa com coloração vermelha ou marrom-avermelhada recheado com creme de baunilha.'
  },
  {
    id: '4',
    title: 'Brownie Espresso',
    info:'Massa de chocolate com café expresso.'
  },
  {
    id: '5',
    title: 'Muffin de Chocolate ou Blueberry',
    info: 'Bolinho simples de chocolate ou tradicional recheado com Blueberry.'
  },
  {
    id: '6',
    title: 'Donuts Chocoberry, Creme de Avelã ou Doce de Leite',
    info: 'Rosquinha açucarada frita coberta com diversos tipos de cobertura.'
  },
];

export default function Doce() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}> Doces </Text>
      <Image style={styles.img} source={require('../assets/donuts.jpg')}/>
      </View>

       <FlatList
        data={doce}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <View style={styles.descriptionContainer}>
          <Text style = {styles.subtitle}>{item.title}</Text>  
          <Text style={styles.description}>{item.info}</Text>
        </View>
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#BC9C7B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  title: {
    color: '#491706',
    fontWeight: 'bold',
    textShadowColor:"#000",
    textShadowOffset:{width: 2, height: 1},
    textShadowRadius: 3,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 24,
    textTransform:'uppercase',
    borderBottomColor: "#000",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 30
  },
  subtitle:{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10
  },
  descriptionContainer:{
    padding:20,  
  },
  img: {
    width: 260,
    height: 180,
    marginBottom: 40,
    borderRadius: 8
  }
});
