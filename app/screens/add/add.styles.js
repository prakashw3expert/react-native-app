import { StyleSheet } from 'react-native'
import {Fonts, Metrics} from '../../themes/'

export default StyleSheet.create({
    container: {
         flex: 1, 
         backgroundColor: 'white' 
    },
    inputBoxView:{
        flex: 1.2,
        marginTop: Metrics.screenHeight * 0.029,
        justifyContent: 'space-around'
    },
    bottomButtonView:{
        flex: 2,
        marginTop: Metrics.screenHeight * 0.049
    },
    colorBoxView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Metrics.screenHeight * 0.0149
    }
})