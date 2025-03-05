import {View , Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';


export function Participant(){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Hello, Matias</Text>
            <TouchableOpacity style={styles.btn} >
                            <Text   style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
        </View>
    )
}