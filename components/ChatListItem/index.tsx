import moment from 'moment'
import React from 'react'
import {View , Text , Image , TouchableWithoutFeedback} from 'react-native'
import {ChatRoom} from '../../types'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}



const CharListItem = (props: ChatListItemProps) => {
const navigation = useNavigation();
const chatRoom = props.chatRoom;



const user = chatRoom.users[1];

const onClick = () => {
    navigation.navigate('ChatRoom' , {
        id: chatRoom.id,
        name : user.name,
    })
}

    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
        <View style={styles.leftContainer}>
        <Image source={{uri: user.imageUri }} style={styles.avatar}/>

        <View style={styles.midContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>

        </View>
        <Text
         style={styles.time}>
             {moment(chatRoom.lastMessage.createdAt).format("YYYY MM DD")}
        </Text>
     
    </View>

        </TouchableWithoutFeedback>
    
) 
}

export default CharListItem