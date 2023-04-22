import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const origin = { latitude: 8.665362,  longitude: 77.856942 };
const destination = { latitude: 8.72395986455355, longitude: 77.77599785859658 };
const { width, height } = Dimensions.get("window");
const GOOGLE_MAPS_APIKEY = "AIzaSyAVBVQoKb4aI53nZmgi_1ya5ZdQFY3TM1g";
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude: 8.72395986455355,
    longitude: 77.77599785859658,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};


const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_POSITION}
                key={GOOGLE_MAPS_APIKEY}>
                <Marker coordinate={{
                    latitude: 40.76711,
                    longitude: -73.979704,
                }}
                    title="Test Title"
                    description="Test Description"
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey='AIzaSyDpQFNHYRSGPk5levahRJAi0RcZ7B8l-4w'
                />
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
});
export default MapScreen