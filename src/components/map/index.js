import React, { Component, Fragment } from "react";
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { getPixelsSize } from '../../utils';

import Search from '../search';
import Directions from '../directions'

import markerImage from '../../assets/marker.png';

import { LocationBox, LocationText } from './styles';

export default class Map extends Component {
    state = {
        region: null,
        destination: null,
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }
                });
            },
            () => {},
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );
    }

    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;


        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            },
        });
    }

    render() {
        const { region, destination } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={ region }
                    showsUserLocation
                    loadingEnabled
                    ref={ el => this.mapView = el }
                >
                    { destination && (
                        <Fragment>
                            <Directions
                                origin={ region }
                                destination={ destination }
                                onReady={ result => {
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: getPixelsSize(50),
                                            left: getPixelsSize(50),
                                            top: getPixelsSize(50),
                                            bottom: getPixelsSize(50)
                                        }
                                    });
                                }}
                            />
                            <Marker
                                coordinate={ destination }
                                anchor={{ x: 0, y: 0 }}
                                image={ markerImage }
                            >
                                <LocationBox>
                                    <LocationText>{ destination.title }</LocationText>
                                </LocationBox>
                            </Marker>
                        </Fragment>
                    ) }
                </MapView>
                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        );
    }
}
