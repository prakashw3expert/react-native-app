import React, { Component } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

const Loader = props => {
    const {
        loading,
    } = props;

    return (
        <Modal
        transparent={true} animationType={'none'} visible={loading} onRequestClose={() => {console.log('Modal Close')}}>
        <View style={styles.background}>
            <View style={styles.activityIndicator}>
                <ActivityIndicator size={'large'}
                color={'rgb(76,217,100)'}
                animation={loading}
                />
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#00000040',
    },
    activityIndicator:{
        height:100,
        width:100,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    }
})

export default Loader;