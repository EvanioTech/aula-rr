import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    },
    txt: {
        
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    btn: {
        backgroundColor: 'red',
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
});