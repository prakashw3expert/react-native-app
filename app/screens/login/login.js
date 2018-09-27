import React, { Component } from 'react'
import { View, Image, Text, AsyncStorage } from 'react-native'
import { StackActions, NavigationActions } from "react-navigation";
import { Content, Container } from 'native-base'
import { connect } from 'react-redux'

import { resumeUser } from '../../todoAsyncStore'
import BlockButton from '../../components/button/button.js'
import InputBox from '../../components/textInput/textInput.js'
import { Images, Fonts } from '../../themes/'
import styles from './login.styles'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
        };
    }

    onPressLogin = () => {
        if(this.state.name){
            AsyncStorage.setItem('TodoUser', this.state.name);
            const LoginAction = StackActions.reset({
                index: 0, actions: [{ type: NavigationActions.NAVIGATE, routeName: 'TabRouter' }], key: null, params: {
                  transition: 'SlideInFromRight'
                } })
            this.props.resumeUser(this.state.name)
            this.props.navigation.dispatch(LoginAction);
        } else {
            alert("Enter name")
        }
    }
    render() {
        return (
            <Container style={styles.container}>
            <Content>
            {/* <View style={styles.container}> */}
                <View style={styles.imageView}>
                    <Image source={Images.appLogo} style={{}} />
                    <Text style={styles.txtTodo}>Todo</Text>
                </View>
                <View style={styles.inputBoxView}> 
                    <InputBox placeholder={"Name"} onChangeText={(text) => this.setState({ name: text })}/>
                    <BlockButton title={"Login"} onPress={() => this.onPressLogin()} />
                </View>
            {/* </View> */}
            </Content>
            </Container>
        )
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
)(Login)