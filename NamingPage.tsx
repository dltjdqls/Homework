import React, { Component } from 'react';

import {
    Text,
    TouchableOpacity,
    TextInput,
 } from 'react-native';
import States from './States';
import { action } from 'mobx';
import Place from './Place';
import { LatLng } from 'react-native-maps';


class NamingPage extends Component<{states: States}, {}> {
    @action
    onChangeText = (text: string, store: States) => {
        store.newLocationName = text
    }

    @action
    onPress = (store: States, nav: any) => {
        const newLoc: LatLng = store.newLocation
        const newLocName: string = store.newLocationName
        const time: number = store.globalTime

        store.placeList.unshift(new Place(newLoc, newLocName, time))
        nav.goBack()
    }


    render() {
        const {navigation} = this.props
        return (
            <>
                <TextInput
                    onChangeText={text => this.onChangeText(text, navigation.getParam('store'))}
                    style={{position:'absolute', left:20, top:30, backgroundColor:'white', alignItems:'flex-start'}} placeholder='장소 이름' placeholderTextColor='gray'
                >
                </TextInput>
                <TouchableOpacity onPress={ () => this.onPress(navigation.getParam('store'), navigation)} style={{position:'absolute', bottom:0, height:40, width:'100%', backgroundColor: 'red', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white'}}>추가하기</Text>
                </TouchableOpacity>
            </>
        )
    }
}

export default NamingPage