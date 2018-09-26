import { createStackNavigator } from 'react-navigation'
import Todo from './todo.js'

const TodoStack = createStackNavigator({
    Todo: {screen: Todo}
},
	{	
	headerMode: 'none',
	initialRouteName:'Todo',
});
export default TodoStack;
