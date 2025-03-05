import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        color: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 5, height: 10 },
        textShadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    input: {
        flex: 1,
        height: 56,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        padding: 10,
        color: 'white', 
        width: 200,
        

    },
    btn: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 7,
        
        width: 50,
        alignItems: 'center',
    },
    btnTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
   
    
    caixaAdd: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});