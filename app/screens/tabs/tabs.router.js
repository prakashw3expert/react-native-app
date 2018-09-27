import React, { Component } from "react";
import { TabNavigator, StackActions, NavigationActions, SafeAreaView } from "react-navigation";
import { View, Platform, Image } from "react-native";
import Add from "../add/add.stack.js";
import Profile from "../profile/profile.stack.js";
import Todo from "../todo/todo.stack.js";
import { Colors, Metrics, Images } from "../../themes/";
import styles from "./tabs.style";

console.disableYellowBox = true;
const tabBarOptions =
  Platform.OS === "ios"
    ? {
        showIcon: true,
        upperCaseLabel: false,
        tabStyle: {
          height: Metrics.screenHeight / 13.7,
          paddingVertical: 2,
          marginVertical: 2,
          backgroundColor: "transparent",
        },
        style: {
          backgroundColor: Colors.white255,
          paddingHorizontal: Metrics.screenWidth * 0.16,
          borderTopColor: Colors.borders
        },
      }
    : {
        upperCaseLabel: false,
        showIcon: true,
        tabStyle: {
          height:Metrics.screenHeight/13.70,
          //paddingVertical: Fonts.size.five,
          backgroundColor: "transparent"
        },
        style: {
          backgroundColor: Colors.white255,
          borderColor: "rgba(0,0,0,0.2)",
          borderWidth: 0,
          elevation: 10,
          paddingHorizontal: Metrics.screenWidth * 0.16
        },
        indicatorStyle: { backgroundColor: "transparent" },
        labelStyle: {
          marginTop: 0,
          marginBottom: 10,
          fontSize: 11,
          width: Metrics.screenWidth / 5
        }
      };

const Tabsnavigator = ({ logout, resetTab, initialRouteName, notificationData}) => {
  const TabsScreenRouter = TabNavigator(
    {
      Todo: { screen: Todo},
      Add: { screen: Add },
      Profile: {screen: Profile}
    },
    {
      tabBarPosition: "bottom",
      initialRouteName,
      lazy: true,
      swipeEnabled: false,
      tabBarOptions,
      notificationData,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarOnPress: ({ scene, jumpToIndex }) => {
          const { route, focused, index } = scene;
        if (focused) {
          if (route.index > 0) {
            let currentIndex = route.index;
            while (currentIndex > 0) {
              navigation.dispatch(NavigationActions.back({}));
              currentIndex -= 1;
            }
          }
        }else {
          jumpToIndex(index);
        }
        },
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          let iconStyle = focused
            ? {marginTop:15}
            : {marginTop:15};
          if (routeName === "Todo") {
            if(focused){
              iconName = Images.feedActive;
            }else{
              iconName = Images.feedInctive;
            }
          } else if (routeName === "Add") {
            if(focused){
              iconName = Images.addActive;
            }else{
              iconName = Images.addInctive;
            }
          } else if (routeName === "Profile") {
            if(focused){
              iconName = Images.profileActive;
            }else{
              iconName = Images.profileInctive;
            }
          }
          return <Image source={iconName} style={[styles.tabImage, iconStyle]} />
        }
      })
    }
  );
  return  (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.greenTheme}} forceInset={{'bottom': 'never'}}><TabsScreenRouter screenProps={{ logout, resetTab, initialRouteName, notificationData }} /></SafeAreaView>
  )
  
}

class TabsWithProps extends Component {
  constructor() {
    super();
    this.state = {
      initialRouteName: 'Todo',
    };
  }
  render() {    
    const LogoutAction = StackActions.reset({
      index: 0, actions: [{ type: NavigationActions.NAVIGATE, routeName: 'Login' }], key: null, params: {
        transition: 'SlideInFromRight'
      } })
    let logoutUser = () => this.props.navigation.dispatch(LogoutAction);
    let resetTab = () => this.setState({ initialRouteName: 'Todo' });
    return (
      <View style={{ flex: 1 }}>
        <Tabsnavigator logout={logoutUser} resetTab={resetTab} initialRouteName={this.state.initialRouteName}/>
      </View>            
      
    );
  }
}

export default TabsWithProps;
