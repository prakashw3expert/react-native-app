import { createStackNavigator } from 'react-navigation'
import Profile from './profile.js'

const ProfileStack = createStackNavigator({
    Profile: {screen: Profile}
},
	{	
	headerMode: 'none',
	initialRouteName:'Profile',
});
export default ProfileStack;
