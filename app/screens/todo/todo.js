import React, {Component} from 'react'
import {View} from 'react-native'
import Header from '../../components/header/header.js'
import TodoList from '../../components/todoList/todoList'

export default class Feed extends Component{
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