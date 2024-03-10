import {Text, View} from 'react-native';
import {Fragment} from 'react';
import {styles} from './styles'
export function Home() {
    return(
  <View style={styles.container}>
     <Text style= {styles.eventName}>
             Nome do Evento
     </Text>
     <Text style= {styles.eventDate}>
         Sexta, 9 de Março de 2024
     </Text>
 </View>
)}