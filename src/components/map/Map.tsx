import React, { useState} from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import logo from '../../assets/images/logo.png'

const containerStyle = {
    width: '1200px',
    height: '500px'
  };
  
  const center = {
    lat: 14.3249,
    lng: 121.086617
  };

  

  const label = "Unit 11, 4/F Exanne Bldg"

const Map = () => {
    const [selectedPark, setSelectedPark] = useState(null);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCVMXkMZ3UmaGLERHWs6efJdoeFyFNXpdw"
    })

    if(!isLoaded) return <div>Loading .......</div>

    return (
        <div className="container-fluid">
            <div className="map">
                <LoadMap />
            </div>
        </div>
    )
}

const LoadMap = () => {

    const [showInfoWindow, activeMarker] = useState("false")

    return (
        <div id="map" className="block mapBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Google Map location</h2>
                </div>
                <GoogleMap zoom={17} center={center} mapContainerStyle={containerStyle}>
                        <Marker position={center} title="Skyguard Security Agency"  icon={{ url: logo, scaledSize: new window.google.maps.Size(50, 50)}}/>

                </GoogleMap>
            </div>
        </div>
    )

}

export default Map