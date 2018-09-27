import React, {Component} from 'react'
import {View, AsyncStorage} from 'react-native'
import { connect } from 'react-redux'

import Header from '../../components/header/header'
import LogoutButton from '../../components/button/logout'

class Profile extends Component{

    onPressLogout = () => {
        AsyncStorage.removeItem('TodoUser');
        this.props.screenProps.logout()
    }

    render(){
        let userName = this.props.userName
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header title={`Hello, ${userName}`}/>
                <LogoutButton title={'Logout'} bottom={0} onPress={() => this.onPressLogout()}/>
            </View>
        )
    }
}

let mapStateToProps = (state, props) => {
    return {
        userName: state.login.userName,
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
)(Profile)