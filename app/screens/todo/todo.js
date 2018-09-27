import React, {Component} from 'react'
import {View} from 'react-native'
import { connect } from 'react-redux'

import {getTodoData, startLoading} from '../../todoAsyncStore'
import Header from '../../components/header/header.js'
import TodoList from '../../components/todoList/todoList'

class Todo extends Component{

    componentDidMount() {
        this.props.startLoading()
        this.props.getTodoData()
    }

    render(){
        console.log('this.todos', this.props.todos)
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

let mapStateToProps = (state, props) => {
  return {
    isLoading: state.todo.loading,
    todos: state.todo.todos,
  }
}
  
let mapDispatchToProps = (dispatch) => {
  return {
      getTodoData: () => { dispatch(getTodoData()) },
      startLoading: () => {dispatch(startLoading())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo)