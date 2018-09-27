import React, {Component} from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes/'
import { View } from 'native-base'
import moment from 'moment'
export default class HeaderView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {title: 'Build a React Native app', date: "2018-09-26", color: 'red'},
                {title: 'Write tests', date: '2018-09-27', color: 'blue'},
                {title: 'Write tests 123', date: '2018-09-28', color: 'pink'},
                {title: 'Write tests 564', date: '2018-09-29', color: 'yellow'}
            ]
        }
    }

    renderItem(item){
        let textDecorationLine = 'none'
        let date = moment(item.item.dueDate).format("YYYY-MM-DD")
        let today  =  moment().format("YYYY-MM-DD")

        if( date === today){
            date = "Due today"
        }else if( date > today){
            let tommrow = moment().add(1, 'days').format("YYYY-MM-DD")
            if(tommrow === date) {
                date = "Due tommrow"
            }
        }else if(date < today) {
            let yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD")
            textDecorationLine = 'line-through'
            if(yesterday === date) {
                date = "Due yesterday"
            }
        }        
        return(
            <View style={styles.cell}>
                <View style={styles.statusView}>
                    <View style={[styles.status, { backgroundColor: item.item.todoColor }]}/>
                </View>
                <View style={styles.contentView}>
                    <Text style={[styles.title, {textDecorationLine: textDecorationLine}]}>{item.item.todoData}</Text>
                    <Text style={styles.timeStatus}>{date}</Text>
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
    cell: {
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.119
    },
    statusView: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        height: Metrics.screenWidth * 0.053,
        width: Metrics.screenWidth * 0.053,
        borderRadius: Metrics.screenWidth * 0.053/2,
    },
    contentView: {
        justifyContent: 'center'
    },
    title: {
        fontSize: Metrics.screenWidth * 0.058,
        fontFamily: Fonts.type.SFProTextRegular,
        color: 'rgb(0,0,0)'
    },
    timeStatus: {
        fontSize: Metrics.screenWidth * 0.042,
        fontFamily: Fonts.type.SFProTextRegular,
        marginTop:  Metrics.screenHeight * 0.011,
        color: 'rgb(74,74,74)'
    }
  })