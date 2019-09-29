import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import {
    View,
    Text,
} from 'react-native';
import Map from "./Map";
import List from "./List";
import MidButtons from "./MidButtons";
import States from './States'


@observer
class Screen extends Component {
    store: States = new States()

    componentDidMount() {
        setInterval(() => {this.store.globalTime++}, 1000)
    }

    render() {
        return(
            <>
                <Map states = {this.store}></Map>
                <MidButtons states = {this.store}></MidButtons>
                <List states = {this.store}></List>
            </>
        );
    }
}

export default Screen;