import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import { Header } from 'native-base';
import {Colors, Metrics, Fonts} from '../../themes/'

export default class HeaderView extends Component {
    render(){
        const {title, bottom, onPress} =  this.props
        return(
            <Header style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </Header>
        )
    }
}
const styles = StyleSheet.create({
    header: {
       backgroundColor: Colors.greenTheme,
        height:  Metrics.screenHeight * 0.11
    },
    text: {
        color: Colors.white255,
        fontSize: Metrics.screenWidth * 0.079,
        fontFamily: Fonts.type.SFProDisplayMedium,
        position: 'absolute',
        bottom: Metrics.screenHeight * 0.017,
        left: Metrics.screenWidth * 0.053
      }
  })