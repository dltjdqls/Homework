import { observable, action, computed } from 'mobx';
import { LatLng } from 'react-native-maps';
import Place from '../datastructures/Place';

class States {
    @observable extended: boolean = false
    @observable adding: boolean = false
    @observable changedPosition: LatLng = {latitude:37.574239, longitude:126.977446}
    @observable changedMarkerPosition: LatLng = {latitude:37.574239, longitude:126.977446}
    @observable globalTime: number = 0
    newLocationName: string = ''
    newLocation: LatLng = {latitude:0.0, longitude:0.0}
    mapView: any
    
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
        this.mapView.animateToRegion({latitude:pos.latitude, longitude:pos.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}, 500)
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

    @action
    addNewLocation = () => {
        this.placeList.push(new Place(this.newLocation, this.newLocationName, this.globalTime))
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