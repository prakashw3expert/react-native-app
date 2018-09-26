import React, { Component } from "react";
import LoginStack from './loginStack'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLogin: false
        };
    }
    async _loadInitialState() {
        var value = await AsyncStorage.getItem('AgroUser');
        if (value !== null) {
            let data = JSON.parse(value);
            this.props.resumeUser(data);
            this.setState({ isReady: true, isLogin: true });
        } else {
            this.setState({ isReady: true });
        }
    }
    render() {
        // if (!this.state.isReady) {
        //     return null
        // }else {
            return(
                <LoginStack isLogin={this.state.isLogin}/>
            )
        // }
    }
}

