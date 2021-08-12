import * as React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList 
} from 'react-native';

const frappe = [
  {
    id: '1',
    title: 'Brigadeiro',
    info: 'Leite, calda de brigadeiro, choco chip e café, finalizado com chantilly e calda de brigadeiro e granulado de chocolate.'
  },
  {
    id: '2',
    title: 'Doce de Leite',
    info: 'Leite, café, calda de doce de leite, finalizado com chantilly e cobertura de caramelo.' 
  },
  {
    id: '3',
    title: 'Mocha',
    info: 'Deliciosa combinação de leite, chocolate ou chocolate branco e café, finalizado com chantilly.' 
  },
];

export default function Cappuccino() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}> Frappuccinos </Text>
      <Image style={styles.img} source={{uri:'https://i.pinimg.com/originals/7e/6e/5d/7e6e5d59183df742c26029e7ed3ff422.jpg'}}/>
      </View>

       <FlatList
        data={frappe}
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