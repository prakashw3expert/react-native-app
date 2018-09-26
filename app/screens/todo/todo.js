import React, {Component} from 'react'
import {View} from 'react-native'
import Header from '../../components/header/header.js'

export default class Feed extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header title={"Todo"}/>
            </View>
        )
    }
}