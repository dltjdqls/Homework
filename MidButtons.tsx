import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import States from './States';
import Place from './Place';

@observer
class MidButtons extends Component<{states: States}, {}> {

    @action
    cancelPress = () => {
        this.props.states.changeAdding()
    }

    @action
    addPress = () => {
        this.props.states.placeList.push(new Place(this.props.states.markerRegion, "place", 0))
        this.props.states.changeAdding()
        console.log(this.props.states.placeList.length)
    }

    @action
    locPress = () => {
        this.props.states.changeAdding()
    }


    renderButtons = () => {
        if (this.props.states.adding) {
            return <>
                    <TouchableOpacity onPress={this.cancelPress} style={{position: 'absolute', backgroundColor: 'lightgray', right: 20, bottom: 70, height: 30, width: 150, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.addPress} style={{position: 'absolute', backgroundColor: 'red', left: 20, bottom: 70, height: 30, width: 150, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white'}}>추가</Text>
                    </TouchableOpacity>
                </>
        }

        return <TouchableOpacity onPress={this.locPress} style={{position: 'absolute', backgroundColor: 'red', right: 20, bottom: 70, height: 40, width: 120, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>장소 추가</Text>
            </TouchableOpacity>
    }

    render() {
        return(
            this.renderButtons()
        );
    }
}

export default MidButtons;