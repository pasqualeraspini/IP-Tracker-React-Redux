import React from 'react';
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import icon from '../images/icon-location.svg';

import { connect } from 'react-redux';
import './map.css'

const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [46, 56]
})

class AddressMap extends React.Component { 
    renderPopup = () => {
        const { isp } = this.props.result.data || {};
        const { lat, lng } = this.props.result.data.location || {};
    
        if (!isp && !lat && !lng) {
            return (
                <Popup>
                    Please search a domain or IP
                </Popup>
            )
        } 

        return (
            <Popup>
                ISP: {isp} <br/>
                Latitude: {lat} <br/>
                Longitude: {lng}
            </Popup>
        )
    }

    getLatLng = () => {
        const { lat, lng } = this.props.result.data.location || {};

        if (!lat && !lng) {
            return [0, 0]
        } else {
            return [lat, lng]
        }
    }

    render() {
        return (
            <Map id="address-map" center={this.getLatLng()} zoom={13}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={markerIcon} position={this.getLatLng()}>
                    {this.renderPopup()}
                </Marker>
            </Map>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.addressReducer 
    }
}

export default connect(mapStateToProps)(AddressMap)