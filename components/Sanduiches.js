import * as React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  FlatList 
} from 'react-native';

const sanduiches = [
  {
    id: '1',
    title: 'Toast de Presunto e Muçarela',
    info: 'Presunto, muçarela e manteiga no pão branco.'
  },
  {
    id: '2',
    title: 'Croque Monsieur',
    info: 'Presunto, queijo prato, molho bechamel e parmesão no pão tipo brioche.' 
  },
  {
    id: '3',
    title: 'Toast de Peru',
    info: 'Pão de forma integral, peito de peru, queijo muçarela e queijo cremoso.' 
  },
];

export default function Sanduiches() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}> Sanduíches </Text>
      <Image style={styles.img} source={require('../assets/toast.jpg')}/>
      </View>

      <FlatList
        data={sanduiches}
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