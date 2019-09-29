import React, { Component } from 'react';
import { observable, reaction, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
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
                        <FlatList
                            data={this.props.states.placeList}
                            renderItem={({item}) =>
                                <View style={{height:30, borderBottomColor:"lightgray", borderBottomWidth:1}}>
                                    <Text>{item.name}</Text>
                                </View>
                            }
                            keyExtractor = {item => item.name}
                        />
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
                <TouchableOpacity
                    onPress={this.onPress}
                    style={{backgroundColor: 'white', borderBottomColor:'lightgray', borderBottomWidth:1, height: 50, alignItems: 'center', justifyContent: 'center'}}
                >
                    <Text> {this.buttonText()} </Text>
                </TouchableOpacity>
                {this.list()}
            </>
        );
    }
}

export default List;