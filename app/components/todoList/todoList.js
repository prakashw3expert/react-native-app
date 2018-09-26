import React, {Component} from 'react'
import {Text, StyleSheet, FlatList} from 'react-native'
import {Colors, Metrics, Fonts} from '../../themes/'
import { View } from 'native-base';

export default class HeaderView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {title: 'Build a React Native app', subheading: 'Due tomorrow', color: 'red'},
                {title: 'Write tests', subheading: 'Due tomorrow', color: 'red'}
            ]
        }
    }
    renderItem(item){        
        return(
            <View style={{flexDirection: 'row', height: 80, }}>
                <View style={{marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: 20, width: 20, borderRadius: 20/2, backgroundColor: 'blue'}}/>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={{fontSize: 22, fontFamily: Fonts.type.SFProTextRegular, color: 'rgb(0,0,0)'}}>{item.item.title}</Text>
                    <Text style={{fontSize: 16, fontFamily: Fonts.type.SFProTextRegular, marginTop: 8, color: 'rgb(74,74,74)'}}>{item.item.subheading}</Text>
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