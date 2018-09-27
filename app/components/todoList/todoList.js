import React, {Component} from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes/'
import { View } from 'native-base'
import moment from 'react-moment'

export default class HeaderView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {title: 'Build a React Native app', date: "28-09-2018", color: 'red'},
                {title: 'Write tests', date: '26-09-2018', color: 'blue'}
            ]
        }
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log("NextProps are ", nextProps)
    //     if(nextProps.data != this.props.data){
    //         return true
    //     }
    //     return false
    // }

    renderItem(item, index){
        console.log("Item is ", item)
        return(
            <View style={{flexDirection: 'row', height: 80 }}>
                <View style={{marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: 20, width: 20, borderRadius: 20/2, backgroundColor: item.item.todoColor}}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={{fontSize: 22, fontFamily: Fonts.type.SFProTextRegular, color: 'rgb(0,0,0)'}}>{item.item.todoData}</Text>
                    <Text style={{fontSize: 16, fontFamily: Fonts.type.SFProTextRegular, marginTop: 8, color: 'rgb(74,74,74)'}}>{item.item.dueDate}</Text>
                </View>
                
            </View>
        )
    }
    render(){
        console.log("This.props ", this.props)
        // let {data} =  this.props
        return(
            <FlatList 
                extraData={this.props.data}
                data={this.props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        )
    }
}
const styles = StyleSheet.create({
    header: {
       backgroundColor: Colors.greenTheme,
        height:  Metrics.screenHeight * 0.11
    },
    text: {
        color: Colors.white255,
        fontSize: Metrics.screenWidth * 0.079,
        fontFamily: Fonts.type.SFProDisplayMedium,
        position: 'absolute',
        bottom: Metrics.screenHeight * 0.017,
        left: Metrics.screenWidth * 0.053
      }
  })