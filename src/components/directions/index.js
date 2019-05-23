import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import key_maps_google from '../../../config/keyMaps';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={ destination }
        origin={ origin }
        onReady={ onReady }
        apikey={ key_maps_google }
        strokeWidth={ 3 }
        strokeColor="#222"
    />
);

export default Directions;
