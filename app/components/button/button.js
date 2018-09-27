import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'
import {Colors, Metrics, Fonts} from '../../themes/'

export default class BlockButton extends Component {
    render(){
        const {title, bottom, onPress} =  this.props
        return(
            <Button style={[styles.button, { backgroundColor:  Colors.greenTheme}]} onPress={onPress}>
             <Text style={styles.text}>{title}</Text>
            </Button>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width: '93%',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: Metrics.screenHeight * 0.078,
        marginVertical: Metrics.screenHeight * 0.029
    },
    text: {
        color:'#fff',
        fontSize: 16,
        fontFamily: Fonts.type.SFProTextMedium
      }
  })