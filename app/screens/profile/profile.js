import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import Header from '../../components/header/header'
import LogoutButton from '../../components/button/logout'

export default class Login extends Component{

    onPressLogout = () => {
        AsyncStorage.removeItem('TodoUser');
        this.props.screenProps.logout()
    }

    render(){
        let userName = "Ali"
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header title={`Hello, ${userName}`}/>
                <LogoutButton title={'Logout'} bottom={0} onPress={() => this.onPressLogout()}/>
            </View>
        )
    }
}