import {View , Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

type Props =
     {  name: string ;
        onRemove: () => void;
     }
export function Participant({name, onRemove}: Props) {

    
    
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Hello, {name}</Text>
            <TouchableOpacity style={styles.btn}  onPress={onRemove}>
                            <Text   style={styles.btnTxt}>-</Text>
            </TouchableOpacity>
        </View>
    )
}