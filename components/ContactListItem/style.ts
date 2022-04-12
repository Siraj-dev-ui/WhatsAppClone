import {StyleSheet , Dimensions} from 'react-native'

const styles = StyleSheet.create({
avatar:{
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
},

container:{
 flexDirection: 'row',
 width: Dimensions.get("window").width,
 justifyContent: 'space-between',
 padding: 10,
},

midContainer:{
justifyContent: 'space-around'
},

leftContainer:{
flexDirection: 'row',
},

userName:{
    fontWeight: 'bold',
    fontSize: 16,
},

status:{
    fontSize: 16,
    color: 'grey',
},


    
})

export default styles