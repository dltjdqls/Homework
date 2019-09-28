import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Map from "./Map";
import List from "./List";
import MidButtons from "./MidButtons";

class Screen extends Component {
    render() {
        return(
            <>
                <Map></Map>
                <MidButtons></MidButtons>
                <List></List>
            </>
        );
    }
}

export default Screen;