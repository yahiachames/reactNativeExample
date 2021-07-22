import React , {useState} from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const initialMessages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/mosh.jpg"),
    },
  ];


function MessagesScreen(props) {
    const [messages , setMessages] = useState(initialMessages)
    const [refresh,setRefresh] = useState(false)
    const handleDelete = (message) => {
    
      setMessages(messages.filter(msg => msg.id !== message.id))
      messages
    }
    return (
    <Screen >
          <FlatList 
      data={messages}
      keyExtractor={message => message.id.toString()}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({item}) => <ListItem  
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log('message selected' , item)}
      renderRightActions={ () => <ListItemDeleteAction   onPress={() => handleDelete(item)} />}
      />}
      refreshing={refresh}
      onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
    );
}

export default MessagesScreen;