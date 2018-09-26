import React, { Component } from "react";
import { AsyncStorage } from 'react-native'
import LoginStack from './loginStack'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLogin: false
        };
    }
    componentWillMount() {
        this._loadInitialState().done();
    }

    async _loadInitialState() {
        var value = await AsyncStorage.getItem('TodoUser');
        if (value !== null) {
            // let data = JSON.parse(value);
            // await this.props.resumeUser(data);
            await this.setState({ isReady: true, isLogin: true });
        } else {
            this.setState({ isReady: true });
        }
    }

    render() {
        if (!this.state.isReady) {
            return null
        }else {
            return(
                <LoginStack isLogin={this.state.isLogin}/>
            )
        }
    }
}

