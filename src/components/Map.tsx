import React, { Component } from 'react';


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { observer } from 'mobx-react';
import States from '../store/States';

@observer
class Map extends Component<{states: States}, {}> {
    renderDraggableMarker = () => {
        if (this.props.states.adding) {
            return <Marker draggable pinColor='green' coordinate={this.props.states.markerRegion} onDragEnd={(e) => this.props.states.changeMarkerRegion(e.nativeEvent.coordinate)}></Marker>
        }
        return null
    }

    renderMarker = () => {
        if (!(this.props.states.adding)) {
            return (
                <>
                    {this.props.states.placeList.map
                    ((place) =>
                        {return (<Marker pinColor='red' coordinate={place.pos}/>)
                        ;}
                    )}
                </>
            );
        }
    }

    // renderMap() {
    //     if (this.props.states.adding) {
    //         return (
    //             <MapView
    //                 ref = {(ref) => this.props.states.mapView = ref}
    //                 provider = {PROVIDER_GOOGLE}
    //                 style = {{flex:1}}
    //                 initialRegion={{latitude:37.574239, longitude:126.977446, latitudeDelta:0.0922, longitudeDelta:0.0421}}
    //                 // region={{latitude:this.props.states.mapRegion.latitude, longitude:this.props.states.mapRegion.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}}
    //                 // onRegionChangeComplete={(e) => this.props.states.changeRegion({latitude: e.latitude, longitude: e.longitude})}
    //             >
    //                 <Marker draggable pinColor='green' coordinate={this.props.states.markerRegion} onDragEnd={(e) => this.props.states.changeMarkerRegion(e.nativeEvent.coordinate)}></Marker>
    //             </MapView>
    //         );
    //     }

    //     return (
    //         <MapView
    //             ref = {(ref) => this.props.states.mapView = ref}
    //             provider = {PROVIDER_GOOGLE}
    //             style = {{flex:1}}
    //             initialRegion={{latitude:37.574239, longitude:126.977446, latitudeDelta:0.0922, longitudeDelta:0.0421}}
    //             // region={{latitude:this.props.states.mapRegion.latitude, longitude:this.props.states.mapRegion.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}}
    //             // onRegionChangeComplete={(e) => this.props.states.changeRegion({latitude: e.latitude, longitude: e.longitude})}
    //         >
    //             {this.renderMarker()}
    //         </MapView>
    //     );
    // }

    render() {
        return(
            <>
                <MapView
                ref = {(ref) => this.props.states.mapView = ref}
                provider = {PROVIDER_GOOGLE}
                style = {{flex:1}}
                initialRegion={{latitude:37.574239, longitude:126.977446, latitudeDelta:0.0922, longitudeDelta:0.0421}}
                // region={{latitude:this.props.states.mapRegion.latitude, longitude:this.props.states.mapRegion.longitude, latitudeDelta:0.0922, longitudeDelta:0.0421}}
                // onRegionChangeComplete={(e) => this.props.states.changeRegion({latitude: e.latitude, longitude: e.longitude})}
            >
                {this.renderDraggableMarker()}
                {this.renderMarker()}
            </MapView>
            </>
        );
    }
}

export default Map;