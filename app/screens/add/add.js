import React, {Component} from 'react'
import {View} from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import DatePickerItem from '../../components/datePicker/datePicker'
import {addNewTodo} from '../../todoAsyncStore'
import Header from '../../components/header/header.js'
import TextInputBox from '../../components/textInput/textInput'
import BlockButton from '../../components/button/button'
import ColorBubble from '../../components/colorBubble/colorBubble'
import { Metrics } from '../../themes/index.js';
import styles from './add.styles.js'

class AddTodo extends Component{

    constructor() {
        super();
        this.state = {
            todoData: ' ',
            todoTitle: ' ',
            todoDate: ' ',
            todoColor: ' '
        };
    }

    textHandel = (text, type) => {
        if(type == 'todoTitle'){
            this.setState({ todoTitle: text })
        } else {
            this.setState({ todoData: text })
        }
    }

    addTodo = () => {
        let todoData = {
            todoData: this.state.todoData,
            todoTitle: this.state.todoTitle,
            todoDate: this.state.todoDate,
            todoColor: this.state.todoColor
        };
        this.props.addNewTodo(todoData)
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
                <TextInputBox placeholder={"When do you need to do?"} height={Metrics.screenHeight * 0.149} multiline={true} paddingTop={Metrics.screenHeight * 0.019} onChangeText={(text) => this.textHandel(text, 'todoData') }/>
                {/* <TextInputBox placeholder={"When is it due?"} onChangeText={(text) => this.textHandel(text, 'todoTitle')}/> */}
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
                <BlockButton title={"Add"} onPress={() => this.addTodo()}/>
            </View>
            </View>
        )
    }
}

let mapStateToProps = (state, props) => {
    return {

    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (todoData) => { dispatch(addNewTodo(todoData)) },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddTodo)