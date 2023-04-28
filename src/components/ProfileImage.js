import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileImage = ({ image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{ uri: image }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#96b18f',
        height: 100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 30,
    },
    name: {
        fontSize: 22,
        color: '#FF',
        fontWeight: '600',
    }
})
export default ProfileImage