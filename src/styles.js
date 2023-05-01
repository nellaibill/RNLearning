import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 20,
        color: 'red',
        backgroundColor: 'white'
    },
    pad10: {
        padding: 10
    },
    plr20: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    list_container: { flexDirection: 'row', padding: 5, borderBottomColor: 'gray', borderBottomWidth: 0.5 },
    list_name: { flex: 1, alignItems: 'flex-start', justifyContent: 'center' },
    quoteContent: {
        height: 250,
        borderWidth: 1,
        marginTop: 20,
        padding: 5
    },
    container: {
        flex: 1,
        padding: 10
    },
    profileData: {
        paddingTop: 60
    },
    btnStyle: {
        alignSelf: "center", marginTop: 25, width: '100%'
    },
});

export default styles;
