import {  useState } from 'react';
import {Text, View, TextInput,  TouchableOpacity,FlatList, ScrollView} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {
    const participants = ['toin', 'quezia', 'matias','lucas','Mayk','Diego','Vitor','andre','alisson','musk','mudo','kaleb']
    function handleAddName() {
        console.log('add')
    }
    function handleRemoveName(name: string) {
        console.log('remove')
    }
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Hello, Matias</Text>
            <View style={styles.caixaAdd}>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                placeholderTextColor='white'
                
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddName} >
                <Text   style={styles.btnTxt}>+</Text>
            </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            {
                participants.map((name) => (
                    <Participant
                    key={name} 
                    name={name}
                     onRemove={() => handleRemoveName(name)} />
                ))
            }
            </ScrollView>
            
            

        </View>
    );
}



