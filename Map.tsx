import React, { Component } from 'react';


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { observer } from 'mobx-react';
import States from './States';

@observer
class Map extends Component<{states: States}, {}> {
    renderMarker = () => {
        return (
            <>
                {this.props.states.placeList.map
                ((place) =>
                    {return (<Marker coordinate={place.pos} onPress={(e) => this.props.states.changeRegion(e.nativeEvent.coordinate)}/>)
                    ;}
                )}
            </>
        );
    }

    renderMap = () => {
        if (this.props.states.adding) {
            return (
                <MapView
                    provider = {PROVIDER_GOOGLE}
                    style = {{flex:1}}
                    region={{latitude:this.props.states.mapRegion.latitude, longitude:this.props.states.mapRegion.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}}
                    onRegionChangeComplete={(e) => this.props.states.changeRegion({latitude: e.latitude, longitude: e.longitude})}
                >
                    <Marker draggable coordinate={this.props.states.markerRegion} onDragEnd={(e) => this.props.states.changeMarkerRegion(e.nativeEvent.coordinate)}></Marker>
                </MapView>
            );
        }

        return (
            <MapView
                provider = {PROVIDER_GOOGLE}
                style = {{flex:1}}
                region={{latitude:this.props.states.mapRegion.latitude, longitude:this.props.states.mapRegion.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}}
                onRegionChangeComplete={(e) => this.props.states.changeRegion({latitude: e.latitude, longitude: e.longitude})}
            >
                {this.renderMarker()}
            </MapView>
        );
    }

    render() {
        return(
            <>
                {this.renderMap()}
            </>
        );
    }
}

export default Map;