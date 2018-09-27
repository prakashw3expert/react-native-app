import React, { Component } from "react";
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

import LoginStack from './loginStack'
import { resumeUser } from '../todoAsyncStore'
class App extends Component {
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
            await this.props.resumeUser(value);
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

let mapStateToProps = (state, props) => {
    return {
 
    }
}
  
let mapDispatchToProps = (dispatch) => {
  return {
    resumeUser: (data) => { dispatch(resumeUser(data)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)