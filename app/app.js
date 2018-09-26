import React, { Component } from "react";
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux';
import store from './store.js';
import Navigate from './screens/navigate.js'

YellowBox.ignoreWarnings(['Class RCTCxxModule']);

const Root = () => (
<Provider store={store}>
	<Navigate />
</Provider>
)

export default Root;