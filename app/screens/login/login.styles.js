import { StyleSheet } from 'react-native'
import {Fonts, Metrics, Colors} from '../../themes/'

export default StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: Colors.white255
    },
    imageView:{
        alignItems: 'center',
        marginTop: 200
    },
    txtTodo:{
        marginTop: Metrics.screenHeight * 0.024,
        fontSize: Metrics.screenWidth * 0.075,
        fontFamily: Fonts.type.SFProDisplayMedium
    },
    inputBoxView:{
        marginTop: 180
    }
});