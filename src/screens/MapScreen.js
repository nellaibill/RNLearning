import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const { width, height } = Dimensions.get("window");
const GOOGLE_MAPS_APIKEY = "AIzaSyDpQFNHYRSGPk5levahRJAi0RcZ7B8l-4w";
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude: 40.76711,
    longitude: -73.979704,
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
                    apikey="AIzaSyDpQFNHYRSGPk5levahRJAi0RcZ7B8l-4w"
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