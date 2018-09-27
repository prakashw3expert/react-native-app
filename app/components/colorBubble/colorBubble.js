import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes/'

export default class ColorBubble extends Component {
    render(){
        const {color, onPress} =  this.props
        return(
            <TouchableOpacity style={[styles.bubble, {backgroundColor: color}]} activeOpacity={0.9} onPress={onPress}/>
        )
    }
}
const styles = StyleSheet.create({
    bubble: {
        height:  50,
        width: 50,
        borderRadius: 50/2
    }
  })