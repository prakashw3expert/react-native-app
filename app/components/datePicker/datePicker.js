import React,{ Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base';
import { Colors , Metrics , Fonts } from '../../themes';
import DatePicker from "react-native-datepicker";

export default class datePickerItem extends Component {
  constructor(props){
    super(props)
    this.state ={
        error: '',
    }
    this.onDateChange = this.onDateChange.bind(this)
  }

  componentWillReceiveProps(newProps){
    if(newProps && newProps.isError === true && !newProps.date){
      this.setState({"error": `${this.props.inputBoxTitle} is required.`})
    } else if (newProps.date){
      this.setState({"error": ""});
    }

  }
  onDateChange(date){
    if(date && this.state.error){
      this.setState({"error": ""})
    } else if (!date){
      this.setState({"error": `${this.props.inputBoxTitle} is required.`});
    }
    this.props.onDateChange(date)
  }
  render(){
      return(
        <View style={styles.container}>
              <DatePicker
                style={styles.datePicker}
                date={this.props.date}
                locale={"en"}
                mode="date"
                placeholder="When is it due?"
                format="YYYY-MM-DD"
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconComponent ={ <Icon name="" style={styles.dropIcon} />}
                androidMode={"default"}
                customStyles={{
                  dateIcon: { position: "absolute", top: 4 },
                  dateInput: {
                    borderWidth: 0,
                    marginLeft: 0
                  },
                  dateText: {
                    textAlign: "left",
                    marginLeft: -Metrics.screenWidth * 0.586,
                    fontFamily: Fonts.type.robotoBold,
                    color: Colors.veryDarkBrown,
                    fontSize: Metrics.screenWidth * 0.04,
                  },
                  placeholderText: {
                    marginLeft: -Metrics.screenWidth * 0.586,
                    textAlign: "left",
                    color: Colors.placeholder,
                    fontFamily: Fonts.type.SFProTextRegular,
                    fontSize: Metrics.screenWidth * 0.04,
                  }
                }}
                onDateChange={this.onDateChange}
              />
          </View>
      )
    }
}
const styles = StyleSheet.create({
   container: {
       height: Metrics.screenHeight * 0.075,
       width: '100%',
       alignItems: 'center'
    },
    datePicker: {
        width: '93%',
        borderColor: Colors.borders,
        borderWidth: 2,
        height: Metrics.screenHeight * 0.095,
        paddingTop: Metrics.screenHeight * 0.014
    }

});
