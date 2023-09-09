import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
    },
    abs: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        marginTop: 120,
        marginLeft: 280
    },
  
    displayPic:{
      marginLeft: 2,
      marginTop: 50,
      marginBottom: 20,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30
    },
    displaymenu: {
        marginTop: 15,
        flex: 0,
        marginLeft: 10,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 25
    },
    
    upperPart: {
      width: 400,
      height: 150,
      flexDirection: 'row'
          
      },
  
    account: {
      width: 400,
      height: 250,
      justifyContent: 'flex-start',
      marginBottom: 15,
      borderBottomWidth: 1, 
      borderBottomColor: '#BFCCB5',
    },
  
    setting: {
      width: 400,
      height: 430,
      justifyContent: 'space-evenly',
      borderTopWidth: 1,
      flexDirection: 'column',
      borderTopColor: '#BFCCB5',
    },
    set: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
  
  });
  