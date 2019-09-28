import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Map from "./Map";
import List from "./List";

class Screen extends Component {
    render() {
        return(
            <>
                <Map></Map>
                <View style={{position: 'absolute', backgroundColor: 'gray', right: 20, bottom: 70, height: 30, width: 150}}></View>
                <View style={{position: 'absolute', backgroundColor: 'gray', left: 20, bottom: 70, height: 30, width: 150}}></View>
                <List></List>
            </>
        );
    }
}

export default Screen;