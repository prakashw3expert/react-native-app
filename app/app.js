import React, { Component } from "react";
import { YellowBox } from 'react-native'
import Navigate from './screens/navigate.js'
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

export default class App extends Component {
	render() {
		return <Navigate />;
	}
}