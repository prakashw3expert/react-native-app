import React, {Component} from 'react'
import {View} from 'react-native'
import { connect } from 'react-redux'

import {getTodoData} from '../../todoAsyncStore'
import Header from '../../components/header/header.js'
import TodoList from '../../components/todoList/todoList'

export default class Todo extends Component{

    componentDidMount() {
        let data = getTodoData()
        console.log("Data is ", data)
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Header title={"Todo"}/>
                <View style={{flex: 1}}>
                    <TodoList />
                </View>
            </View>
        )
    }
}

// let mapStateToProps = (state, props) => {
//     return {

//     }
//   }
  
//   let mapDispatchToProps = (dispatch) => {
//     return {
//         getTodoData: () => { dispatch(getTodoData()) },
//     }
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   )(Todo)