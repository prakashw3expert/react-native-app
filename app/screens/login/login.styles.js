import { StyleSheet, Platform } from 'react-native'
import {Fonts, Metrics, Colors} from '../../themes/'

export default StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: Colors.white255
    },
    imageView:{
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? Metrics.screenHeight * 0.299 : Metrics.screenHeight * 0.229,
    },
    txtTodo:{
        marginTop: Metrics.screenHeight * 0.024,
        fontSize: Metrics.screenWidth * 0.075,
        fontFamily: Fonts.type.SFProDisplayMedium
    },
    inputBoxView:{
        marginTop: Platform.OS === 'ios' ? Metrics.screenHeight * 0.269 : Metrics.screenHeight * 0.249,
    }
});