import * as React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList 
} from 'react-native';

const coffee = [
  {
    id: '1',
    title: 'Café Filtrado',
    info: 'Preparado no método tradicional: filtro de papel.'
  },
  {
    id: '2',
    title: 'Café Latte',
    info: 'Espresso, leite vaporizado e espuma de leite.'
  },
  {
    id: '3',
    title: 'Cappuccino Tradicional',
    info: 'Espresso com leite cremoso.'
  },
  {
    id: '4',
    title: 'Cappuccino Canela',
    info: 'Espresso, um toque de canela e leite cremoso, finalizado com pitadas de canela em pó.' 
  },
  {
    id: '5',
    title: 'Cappuccino chocolate',
    info: 'Calda de chocolate, espresso e leite cremoso, com deliciosa cobertura de chocolate e chocolate em pó.' 
  },
];

export default function Cappuccino() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}> Clássicos </Text>
      <Image style={styles.img} source={require('../assets/cappuccino.png')}/>
      </View>

      <FlatList
        data={coffee}
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
    padding: 20,  
  },
  img: {
    width: 260,
    height: 180,
    marginBottom: 40,
    borderRadius: 8
  }
});