import {  useState } from 'react';
import {Text, View, TextInput, Touchable, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {
    function handleAddName() {
        console.log('add')
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
            <Participant />
            <Participant />
            

        </View>
    );
}



