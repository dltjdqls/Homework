import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
 } from 'react-native';

class NamingPage extends Component {
    render() {
        const { navigation } = this.props
        return (
            <>
                <View style={{flex:1, backgroundColor:'green'}}>
                    <Text>hi</Text>
                </View>
                <TouchableOpacity style={{flex:1, backgroundColor: 'white'}}>
                    <Text>hi</Text>
                </TouchableOpacity>
            </>
        )
    }
}

export default NamingPage