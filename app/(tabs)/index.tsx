import {Text, View} from 'react-native';
import {Fragment} from 'react';

export default function TabOneScreen(){
    return(

   <View style={{
        flex: 1,
        backgroundColor: '#131016'
    }}>

    <Text style= {{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
      }}>
      Nome do Evento
    </Text>

    <Text style= {{
      color: '#6B6B6B',
      fontSize: 16
    }}>
      Sexta, 9 de Março de 2024
   </Text>
 </View>
    )
}