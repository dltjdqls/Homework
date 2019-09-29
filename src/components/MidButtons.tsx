import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import States from '../store/States';

@observer
class MidButtons extends Component<{states: States, nav: any}, {}> {

    @action
    cancelPress = () => {
        this.props.states.changeAdding()
    }

    @action
    addPress = () => {
        this.props.states.newLocation = this.props.states.markerRegion
        this.props.nav.navigate("Second", {store: this.props.states})
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