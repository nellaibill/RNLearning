import { View, StyleSheet, Dimensions,Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import React, { useState, useEffect } from 'react';
const GOOGLE_MAPS_APIKEY = "AIzaSyAVBVQoKb4aI53nZmgi_1ya5ZdQFY3TM1g";
import { useSelector } from 'react-redux'
const MapScreen = () => {
    const userData = useSelector(state => state.movie.userData);
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.3421,
                longitudeDelta: 0.0421,
            });
        })
    }, []);
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                key={GOOGLE_MAPS_APIKEY}>
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} 
                    image={{ uri: userData.photoURL }}/>
            </MapView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: '14'
    }
});
export default MapScreen