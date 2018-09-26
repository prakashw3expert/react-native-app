import { StyleSheet } from 'react-native'
import {Fonts, Metrics} from '../../themes/'

export default StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: 'white' 
    },
    imageView:{
        alignItems: 'center',
        flex: 3 ,
        justifyContent: 'center'
    },
    txtTodo:{
        marginTop: Metrics.screenHeight * 0.014,
        fontSize: Metrics.screenWidth * 0.056,
        fontFamily: Fonts.type.SFProDisplayMedium
    },
    inputBoxView:{
        flex: 1
    }
});