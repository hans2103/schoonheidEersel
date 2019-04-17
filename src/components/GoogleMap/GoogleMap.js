import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

const containerStyles = {
    position: 'relative',
    height: '450px'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                className={'map'}
                google={this.props.google}
                zoom={17}
                style={mapStyles}
                containerStyle={containerStyles}
                initialCenter={{
                    lat: 51.351533,
                    lng: 5.303703
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Yvonne, Specialiste in schoonheid'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyClRlC_QWfD6YEIL-5kqTlFBln4Hd8Cj70'
})(MapContainer);