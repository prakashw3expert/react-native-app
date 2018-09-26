import React, {Component} from 'react'
import {View} from 'react-native'
import Header from '../../components/header/header.js'
import TextInputBox from '../../components/textInput/textInput'
import BlockButton from '../../components/button/button'
import ColorBubble from '../../components/colorBubble/colorBubble'
import { Metrics } from '../../themes/index.js';
import styles from './add.styles.js'
import DatePickerItem from '../../components/datePicker/datePicker'
import moment from 'moment'
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            startingDate: ''
        }
    }
    renderDatePicker(){
        return(
            <DatePickerItem
            date={this.state.startingDate}
            minDate={moment().format("YYYY-MM-DD")}
            maxDate={moment().add(1, 'years').format("YYYY-MM-DD")}
            onDateChange={date => { this.setState({startingDate: date})}}
          />
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <Header title={"Add"}/>
            <View style={styles.inputBoxView}>
                <TextInputBox placeholder={"When do you need to do?"} height={Metrics.screenHeight * 0.149} multiline={true} paddingTop={Metrics.screenHeight * 0.019}/>
                {/* <TextInputBox placeholder={"When is it due?"}/> */}
                {this.renderDatePicker()}
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