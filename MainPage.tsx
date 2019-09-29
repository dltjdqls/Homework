import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Map from "./Map";
import List from "./List";
import MidButtons from "./MidButtons";
import States from './States'


@observer
class MainPage extends Component<{states: States},{}> {
    store: States = new States()

    componentDidMount() {
        setInterval(() => {this.store.globalTime++}, 1000)
    }

    render() {
        const { navigation } = this.props
        return(
            <>
                <Map states = {this.store}></Map>
                <MidButtons states = {this.store} nav = {navigation}></MidButtons>
                <List states = {this.store}></List>
            </>
        );
    }
}

export default MainPage;