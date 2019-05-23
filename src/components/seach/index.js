import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import key_maps_google from '../../../config/keyMaps';

export default class Search extends Component {
    render() {
        return <GooglePlacesAutocomplete 
            placeholder="Para onde?"
            placeholderTextColor="#333"
            onPress={ () => {} }
            query={{
                key: this.key_maps_google,
                language: 'pt', 
            }}
            textInputProps={{
                autoCapitalize: "none",
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContainer={false}
        />;
    }
}