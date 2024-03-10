import {Text, View, StyleSheet} from 'react-native';
import {Fragment} from 'react';

export default function TabOneScreen(){
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    }
});