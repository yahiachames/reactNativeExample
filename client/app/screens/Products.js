import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../components/Card'
function Products(props) {
    return (
       <View style={styles.container}>
<Card  title="jacket i dont need anymore" subTitle="500$" image={require('../assets/jacket.jpg')}/>
<Card  title="couch i don't need " subTitle="300$" image={require('../assets/jacket.jpg')} />
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E9E9E5",
        paddingVertical:40,
        paddingHorizontal:15
        
    }
})

export default Products;