import { observable, action, computed } from 'mobx';
import { LatLng, Region } from 'react-native-maps';
import Place from './Place';

class States {
    @observable extended: boolean = false
    @observable adding: boolean = false
    @observable changedPosition: LatLng = {latitude:37.574239, longitude:126.977446}
    @observable changedMarkerPosition: LatLng = {latitude:37.574239, longitude:126.977446}
    @observable globalTime: number = 0
    
    @observable placeList: Place[] = []

    @action
    changeExtended = () => {
        console.log("states.changeextended")
        this.extended = !(this.extended)
    }

    @action
    changeAdding = () => {
        console.log("states.changeadding")
        this.adding = !(this.adding)
    }

    @action
    changeMarker = (pos : LatLng) => {
        console.log(pos)
    }

    @action
    changeRegion = (pos : LatLng) => {
        this.changedPosition = {latitude:pos.latitude, longitude:pos.longitude}
        console.log(this.changedPosition)
    }

    @action
    changeMarkerRegion = (pos : LatLng) => {
        this.changedMarkerPosition = pos
        console.log(this.changedMarkerPosition)
    }

    @action
    increaseTime = () => {
        this.globalTime++
    }

    @computed
    get mapRegion(): LatLng {
        return {latitude: this.changedPosition.latitude, longitude: this.changedPosition.longitude}
    }

    @computed
    get markerRegion(): LatLng {
        return {latitude: this.changedMarkerPosition.latitude, longitude: this.changedMarkerPosition.longitude}
    }

}

export default States;