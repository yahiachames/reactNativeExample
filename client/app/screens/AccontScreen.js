import React from 'react';

import { StyleSheet , View,FlatList } from 'react-native'

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors'
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Icon from '../components/Icon'




const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];
  

function AccontScreen(props) {
    return (
        <Screen style={styles.screen}>
           <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.yellowFlash} />}
      />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
      },
      container: {
        marginVertical: 20,
      },
})

export default AccontScreen;