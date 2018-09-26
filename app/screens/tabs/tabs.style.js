import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../themes/'

export default StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
	tab: {
		width:Metrics.screenWidth/5,
		backgroundColor: 'white',
		borderTopWidth:0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomWidth: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		paddingBottom: 0,
		
	},
	label: {
		width: Metrics.screenWidth/5,
		fontSize: Metrics.screenWidth * 0.04,
		height: Metrics.screenHeight *0.020,
	},
	footer: {
		backgroundColor: 'white',
		shadowColor: 'rgb(188, 188, 188)',
		shadowOffset: { width: 0, height: -5 },
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 20
	},
	tabImage: {
		height: 24,
		width:24,
	},
	activeTabStyle: {
		color: 'blue',
		fontSize: Metrics.screenWidth * 0.023
	},
	inactiveTabStyle: {
		color: '#4a4a4a',
		fontSize: Metrics.screenWidth * 0.023
	}
});
