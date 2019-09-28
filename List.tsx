import React, { Component } from 'react';
import { observable, reaction, action } from "mobx";
import { observer } from "mobx-react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

@observer
class List extends Component {

    @observable extended = false

    @action
    onPress = () => {
        console.log("pressed")
        this.extended = !(this.extended)
    }

    list = () => {
        if (this.extended) {
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
        if (this.extended) {
            return <Text> 닫기 </Text>
        }

        return <Text> 열기 </Text>
    }


    render() {
        return (
            <>
                <TouchableOpacity onPress={this.onPress} style={{backgroundColor: 'gray', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text> {this.buttonText()} </Text>
                </TouchableOpacity>
                {this.list()}
            </>
        );
    }
}

export default List;