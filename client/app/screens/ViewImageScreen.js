import React from 'react';
import { Image, View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View  style={styles.container} >
            <View style={styles.btnContainer}>
            <View style={styles.closeBtn}  >
            <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteBtn}  >
            <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
            </View>
            <View/>
            </View>
            <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
flex:1,
backgroundColor:'black',
justifyContent:'center',
alignItems:'center'

    },
img:{
        width:'100%',
        height:600
    },
    closeBtn:{
       
       position:"absolute",
       left: 20,
       top: 20
    },
    deleteBtn:{
     
        position:"absolute",
        right: 20,
        top: 20
        
    },
    btnContainer:{
    flex:1,
    width:'100%',


    

    }
})

export default ViewImageScreen;