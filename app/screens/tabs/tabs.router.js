import React, { Component } from "react";
import { TabNavigator, StackActions, NavigationActions, SafeAreaView } from "react-navigation";
import { View, Platform, Image } from "react-native";
import { Icon } from "native-base";
import Add from "../add/add.stack.js";
import Profile from "../profile/profile.stack.js";
import Todo from "../todo/todo.stack.js";
import { Colors, Metrics, Images } from "../../themes/";
import styles from "./tabs.style";

console.disableYellowBox = true;
const tabBarOptions =
  Platform.OS === "ios"
    ? {
        activeTintColor: Colors.orange,
        inactiveTintColor: "rgb(120,120,120)",
        showIcon: true,
        upperCaseLabel: false,
        tabStyle: {
          height: Metrics.screenHeight / 13.7,
          paddingVertical: 2,
          marginVertical: 2,
          backgroundColor: "transparent",
        }
      }
    : {
        activeTintColor: Colors.orange,
        inactiveTintColor: "rgb(120,120,120)",
        upperCaseLabel: false,
        showIcon: true,
        tabStyle: {
          height:Metrics.screenHeight/13.70,
          //paddingVertical: Fonts.size.five,
          backgroundColor: "transparent"
        },
        style: {
          backgroundColor: Colors.white,
          borderColor: "rgba(0,0,0,0.2)",
          borderWidth: 0,
          elevation: 10,
        },
        indicatorStyle: { backgroundColor: "transparent" },
        labelStyle: {
          marginTop: 2,
          marginBottom: 0,
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
            ? { color: Colors.orange , textAlign:'center', fontSize:12 , marginBottom:-6}
            : { color: "rgb(117, 117, 117)",  textAlign:'center',fontSize: 24 ,marginBottom:-5};
          if (routeName === "Todo") {
            iconName = Images.feedActive;
          } else if (routeName === "Add") {
            iconName = Images.addActive;
          } else if (routeName === "Profile") {
            iconName = Images.profileActive;
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
