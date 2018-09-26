import { createStackNavigator } from 'react-navigation'
import Add from './add.js'

const AddStack = createStackNavigator({
    Add: {
        screen: Add,
        navigationOptions: {
            title: 'Menu'
        }
    }
},
	{	
	headerMode: 'none',
	initialRouteName:'Add',
});
export default AddStack;
