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
        let date = moment(item.item.date).format("YYYY-MM-DD")
        let today  =  moment().format("YYYY-MM-DD")
        let titleColor = 'rgb(0,0,0)'
        let timeColor = 'rgb(74,74,74)'
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
                titleColor = 'rgb(155,155,155)'
                timeColor = 'rgb(155,155,155)'
            }
        }        
        return(
            <View style={styles.cell}>
                <View style={styles.statusView}>
                    <View style={[styles.status, { backgroundColor: item.item.color }]}/>
                </View>
                <View style={styles.contentView}>
                    <Text style={[styles.title, { textDecorationLine: textDecorationLine, color: titleColor }]}>{item.item.title}</Text>
                    <Text style={[styles.timeStatus, { color: timeColor }]}>{date}</Text>
                </View>
            </View>
        )
    }
    render(){
        const {data} =  this.props
        return(
            <FlatList 
                data={this.state.data}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item, index) =>this.renderItem(item)}
            />
        )
    }
}
const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.11
    },
    statusView: {
        marginHorizontal: Metrics.screenWidth * 0.053,
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
        fontSize: Metrics.screenWidth * 0.05,
        fontFamily: Fonts.type.SFProTextRegular
    },
    timeStatus: {
        fontSize: Metrics.screenWidth * 0.035,
        fontFamily: Fonts.type.SFProTextRegular,
        marginTop:  Metrics.screenHeight * 0.01
    }
  })