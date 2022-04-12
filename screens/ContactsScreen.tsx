import * as React from 'react';
import { StyleSheet , FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View ,  } from '../components/Themed';
import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item}/>}
      keyExtractor = {(item) => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
