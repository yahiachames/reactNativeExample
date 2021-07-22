import React from 'react';
import { Image, View ,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem'
import colors from '../config/colors'
function ListingDetailsScreen(props) {
    return (
        <View style={styles.container} >
            <Image  style={styles.image}  source={require('../assets/jacket.jpg')}  />
            <View  style={styles.detailsContainer} >
                <AppText style={styles.title}   >jacket i don't need</AppText>
                <AppText style={styles.price}  >500$</AppText>
<View  style={styles.userContainer} >
<ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
</View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,   
    },
    image : {
        width: "100%",
        height: 300,
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
    },
    detailsContainer: {
        padding: 20,
      },
      
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  }
  ,
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen;