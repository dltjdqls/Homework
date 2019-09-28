import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends Component {
    render() {
        return(
            <MapView
                provider = {PROVIDER_GOOGLE}
                style = {{flex:1}}
                initialRegion={{
                    latitude:37.574239,
                    longitude:126.977446,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                }}
            >
                
            </MapView>
        );
    }
}

export default Map;