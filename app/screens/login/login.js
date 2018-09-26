import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import BlockButton from '../../components/button/button.js'
import InputBox from '../../components/textInput/textInput.js'
import { Images, Fonts } from '../../themes/'
import styles from './login.styles'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={Images.appLogo} style={{}} />
                    <Text style={styles.txtTodo}>Todo</Text>
                </View>
                <View style={styles.inputBoxView}> 
                    <InputBox placeholder={"Name"}/>
                    <BlockButton title={"Login"} onPress={() => { this.props.navigation.navigate('TabRouter')}} />
                </View>
            </View>
        )
    }
}