import React from 'react';
import { ImageBackground, View,StyleSheet, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors'
function WelcomeScreen(props) {
    return (
        <View  style={styles.container} > 
            <ImageBackground blurRadius={4}  source={require('../assets/background.jpg')} style={styles.background} >
                <View  style={styles.logoContainer} >
                    <Image  source={require('../assets/logo-red.png')} style={styles.logo}  />
                    <Text style={styles.tagline} >sell what you don't need</Text>
                </View>
                <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
        
            <View style={styles.registerBtn} />

            </ImageBackground>
        
        </View>
        
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
       
        
    },
    background:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        
        
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
      },
   
   
    logo:{
        width: 100,
        height:100
    },
    logoContainer:{
       position:'absolute',
       top:40,
       alignSelf:'center',
       alignItems:'center'
       
       
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
      },

})

export default WelcomeScreen;