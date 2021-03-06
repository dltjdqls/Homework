import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import States from '../store/States';

@observer
class List extends Component<{states: States}, {}> {
    @observable time: number = 0

    componentDidMount() {
        setInterval(this.updateTime, 1000)
    }

    @action
    updateTime = () => {
        this.time = this.props.states.globalTime
    }

    @action
    onPress = () => {
        this.props.states.changeExtended()
    }

    timeText = (time: number) => {
        if (time >= 60) {
            if (Math.floor(time/60) == 1) {
                return <Text> 1 minute ago</Text>
            }

            else {
                return <Text> {Math.floor(time/60)} minutes ago </Text>
            }
        }

        if (time == 1) {
            return <Text> 1 second ago </Text>
        }
        
        return <Text> {time} seconds ago </Text>
    }

    buttonText = () => {
        if (this.props.states.extended) {
            return <Text> 닫기 </Text>
        }
        return <Text> 열기 </Text>
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
                    <TouchableOpacity onPress={() => this.props.states.changeRegion(item.pos)} style={{height:40, width:'100%', borderBottomColor:"lightgray", borderBottomWidth:1, flexDirection:'row', alignItems:'center'}}>
                        <View style={{position: 'absolute', left: 20}}>
                            <Text style={{flex:1}}>{item.name}</Text>
                        </View>
                        <View style={{position: 'absolute', right: 20}}>
                            {this.timeText(this.time-item.time)}
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
                <View style={{position: 'absolute', bottom: 0, height:0}}>
                    <Text> {this.time} </Text>
                </View>
            </>
        );
    }
}

export default List;