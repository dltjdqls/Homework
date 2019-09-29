import React, { Component } from 'react';
import { observable, reaction, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import States from './States';

// @inject('States')
@observer
class List extends Component<{states: States}, {}> {


    @action
    onPress = () => {
        this.props.states.changeExtended()
    }

    list = () => {
        if (this.props.states.extended) {
            return <View
                        style={{
                            backgroundColor:'white',
                            height: 200,
                        }}
                    >

                    </View>
        }
        return null
    }

    buttonText = () => {
        if (this.props.states.extended) {
            return <Text> 닫기 </Text>
        }
        return <Text> 열기 </Text>
    }


    render() {
        return (
            <>
                <TouchableOpacity onPress={this.onPress} style={{backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text> {this.buttonText()} </Text>
                </TouchableOpacity>
                {this.list()}
            </>
        );
    }
}

export default List;