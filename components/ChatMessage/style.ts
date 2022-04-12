
import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create ({
    container: {
        padding: 10,
    },
    messageContainer:{
        backgroundColor: "#e5e5e5"
        , padding: 10,
        marginRight: 50,
        borderRadius: 5,
    },
    name : {
        color : Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message : {
        
    },
    time : {
        alignSelf: 'flex-end',
        color: 'grey',
    },
})

export default styles;