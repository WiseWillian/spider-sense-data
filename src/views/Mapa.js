import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mapa extends Component
{
    render()
    {
        return (
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 className={'map'}
                 zoom={16}
                 initialCenter={{
                     lat: -19.905510,
                     lng: -43.944154
                 }}>
                <Marker
                    title={'O dispositivo foi acionado devido a um evento perigoso de alta velocidade'}
                    name={'Alta velocidade'}
                    position={{lat: -19.905510, lng: -43.944154}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCT1S83I0VJrGbVrZeikKVH8HsD0llV0Ac")
})(Mapa)