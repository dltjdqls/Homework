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
import { LatLng } from 'react-native-maps';

// @inject('States')
@observer
class List extends Component<{states: States}, {}> {
    @observable time: number = 0

    @action
    updateTime = () => {
        this.time = this.props.states.globalTime
    }

    componentDidMount() {
        setInterval(this.updateTime, 1000)
    }

    @action
    onPress = () => {
        this.props.states.changeExtended()
    }

    @action
    changeRegion = (pos: LatLng) => {
        this.props.states.changeRegion(pos)
    }


    getList = () => {
        if (this.props.states.placeList.length == 0){
            console.log("성분 x")
            return <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> 장소가 없습니다 </Text>
            </View>
        }

        return <FlatList
                data={this.props.states.placeList}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={(e) => this.changeRegion(item.pos)} style={{height:40, width:'100%', borderBottomColor:"lightgray", borderBottomWidth:1, flexDirection:'row', alignItems:'center'}}>
                        <View style={{position: 'absolute', left: 20}}>
                            <Text style={{flex:1}}>{item.name}</Text>
                        </View>
                        <View style={{position: 'absolute', right: 20}}>
                            <Text>{this.time - item.time} seconds ago </Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor = {item => item.name}
                />
    }
    

    renderList = () => {
        if (this.props.states.extended) {
            return <View
                        style={{
                            backgroundColor:'white',
                            height: 200,
                        }}
                    >
                        {this.getList()}
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
                {this.renderList()}
                <View style={{height:0}}>
                    <Text> {this.time} </Text>
                </View>
            </>
        );
    }
}

export default List;