import React, {Component} from 'react'
import {View} from 'react-native'
import Header from '../../components/header/header.js'
import TextInputBox from '../../components/textInput/textInput'
import BlockButton from '../../components/button/button'
import ColorBubble from '../../components/colorBubble/colorBubble'
import { Metrics } from '../../themes/index.js';
import styles from './add.styles.js'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header title={"Add"}/>
            <View style={styles.inputBoxView}>
                <TextInputBox placeholder={"When do you need to do?"} height={Metrics.screenHeight * 0.149} multiline={true} paddingTop={Metrics.screenHeight * 0.019}/>
                <TextInputBox placeholder={"When is it due?"}/>
            </View>
            <View style={styles.bottomButtonView}>
                <View style={styles.colorBoxView}>
                    <ColorBubble color={"rgb(74, 144, 226)"}/>
                    <ColorBubble color={"rgba(126,211,33,0.25)"}/>
                    <ColorBubble color={"rgba(208,2,27,0.25)"}/>
                    <ColorBubble color={"rgba(189,16,224,0.25)"}/>
                    <ColorBubble color={"rgba(245,166,35,0.25)"}/>
                </View>
                <BlockButton title={"Add"}/>
            </View>
            </View>
        )
    }
}