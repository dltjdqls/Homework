import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Map from "./Map";
import List from "./List";
import MidButtons from "./MidButtons";
import States from './States'



class Screen extends Component {
    store: States = new States()
    render() {
        return(
            <>
                <Map></Map>
                <MidButtons states = {this.store}></MidButtons>
                <List states = {this.store}></List>
            </>
        );
    }
}

export default Screen;