import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Login from './login/login.js'
import TabRouter from './tabs/tabs.router.js'

const AuthStackNavigator = ({ initialRouteName }) => {
    const LoginStack = createStackNavigator({
        Login: { 
            screen: Login
        },
        TabRouter: { 
            screen: TabRouter
        }
    },
    {
        headerMode: 'screen',
        initialRouteName,
        navigationOptions: {
            header: null
        }
    });
      return ( <LoginStack />)
    }
    
class StackWithProps extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLogin: false
        };
    }
    render() {
        return (
            // <AuthStackNavigator	initialRouteName={this.props.isLogin ? 'TabRouter' : 'Login'} />
            <AuthStackNavigator	initialRouteName={'Login'} />
        )
    }
}
export default StackWithProps;