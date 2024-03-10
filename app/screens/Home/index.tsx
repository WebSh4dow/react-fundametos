import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { Participant } from '@/app/components/Participant';
import {styles} from './styles'

export function Home() {

    const participants = ['Jarmison', 'Fulano', 'Fulana','Ana','Luiza','Felipe','Vitoria','Luiz','Barbosa'];

    function handleParticipantAdd() {
        if (participants.includes("Jarmison")) {
          return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.");
        }
    }

    function handleParticipantRemove(name: string) {
      Alert.alert("Remover",`Remover o participante ${name}?`, [
         {
            text: 'Sim',
            onPress: () => Alert.alert("Deletado!")
         },
         {
            text: 'Não',
            style: 'cancel'
         }
      ]);
    }

   return(
    <View style={styles.container}>
       <Text style= {styles.eventName}>
             Nome do Evento
       </Text>

       <Text style= {styles.eventDate}>
            Sexta, 9 de Março de 2024
       </Text>

    <View style={styles.form}>
       <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
       />

     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
           +
        </Text>
    </TouchableOpacity>
   </View>
   <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item})=> (
         <Participant
           key={item}
           name={item}
           onRemove={() => handleParticipantRemove(item)} 
         />
    )}
      showsVerticalScrollIndicator = {false}
      ListEmptyComponent={() => (
         <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
         </Text>
      )}
   />
 </View>
)}